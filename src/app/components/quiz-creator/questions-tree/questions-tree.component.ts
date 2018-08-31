import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormArray, FormGroup } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

//FileNode Model
class FileNode {
    text: AbstractControl
    textEditable: boolean //Property used in template to edit text
    value?: AbstractControl
    valueEditable?: boolean //Property used in template to edit value
    index: number //Property used from a form control to refers to its index in FormArray
    parentIndex?: number //Property used from items inner FormArray controls of FormArray controls
    children?: FileNode[]
}

@Component({
    selector: 'questions-tree',
    templateUrl: './questions-tree.component.html',
    styleUrls: ['./questions-tree.component.scss']
})
export class QuestionsTreeComponent implements OnInit {
    @Input('quizFormModel') quiz: FormControl
    @Input('quizBuilders') quizBuilders
    //@Input('questionsFormModel') questions: FormArray

    questions: FormArray;
    dataChange: BehaviorSubject<FileNode[]>;
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;

    constructor () {}

    ngOnInit () {
        console.log(this.quiz);
        this.setTreeConfiguration();
    }

    /**
     * Build a Tree Data Object from quiz questions object
     * @param obj data object
     * @param level parameter used for recursion
     * @return {FileNode[]} fileNode list for data source
     */
    _buildFileTree( quizQuestionsObj: FormArray ): FileNode[] {
        if (!quizQuestionsObj.hasOwnProperty('controls')) return;

        return quizQuestionsObj.controls.map((oQuestion: FormGroup, parentIndex: number): FileNode => {
            let { text, answers } = oQuestion.controls;
            return {
                text,
                textEditable: text.value.trim() === '',
                index: parentIndex,
                children: answers.controls.map((oAnswer: FormGroup, index: number): FileNode => {
                    let { text, value } = oAnswer.controls;
                    return {
                        text,
                        textEditable: text.value.trim() === '',
                        value,
                        valueEditable: value.value.trim() === '',
                        index,
                        parentIndex
                    };
                })
            };
        })
    }

    //Configure tree component
    setTreeConfiguration = () => {
        //Store questions form control object
        this.questions = this.quiz.get('questions') as FormArray;
        //Create Tree Data Object
        const jsonData = this.questions.value;
        const treeData = this._buildFileTree(jsonData);
        //Set how to get children from a node
        this.nestedTreeControl = new NestedTreeControl<FileNode> ((node: FileNode) => node.children)
        //Set Tree Data Source
        this.nestedDataSource = new MatTreeNestedDataSource();
        //Creata an observable to monitor data changes
        this.dataChange = new BehaviorSubject<FileNode[]>([]);
        //Notify first data change
        this.dataChange.next(treeData);
        //Subscribe to observable in order to update Tree Data Source every change
        this.dataChange.subscribe((data) => this.nestedDataSource.data = data );
    }

    //Set event handlers for questions
    handleQuestions = (() => {

        const _updateObservable = () => {
            //Build new Tree
            const newTree = this._buildFileTree(this.questions);
            //Notify it to observable
            this.dataChange.next(newTree);
        }
        const toggleEditable = (type: 'text' | 'value', node: FileNode) => {
            switch (type) {
                case 'text':
                    //Switch to view mode only if the value of node is valid
                    if (node.textEditable && node.text && node.text.invalid) return;
                    else node.textEditable = !node.textEditable;
                break;

                case 'value':
                    //Switch to view mode only if the value of node is valid
                    if (node.valueEditable && node.value && node.value.invalid) return;
                    else node.valueEditable = !node.valueEditable;
                break;
            }
            
        } 
        const addNew = () => {
            this.questions.push(this.quizBuilders.emptyQuestion());
            _updateObservable();
        }
        const remove = (index: number) => {
            this.questions.removeAt(index);
            _updateObservable();
        }
        const addNewAnswer = (node: FileNode) => {
            //Get questions FormArray
            let formGroup = node.text.parent as FormGroup;
            let answers = formGroup.get('answers') as FormArray;
            //Add new answer
            answers.push(this.quizBuilders.emptyAnswer());
            _updateObservable();
        }
        const removeAnswer = (answerIndex: number, questionIndex: number) => {
            let answers = this.questions.at(questionIndex).get('answers') as FormArray;
            answers.removeAt(answerIndex);
            _updateObservable();
        }
    
        return {
            toggleEditable,
            addNew,
            remove,
            addNewAnswer,
            removeAnswer
        }

    })()

    //Function used from tree in template to know if a node has nested childs
    hasNestedChild = (_: number, nodeData: FileNode) => nodeData.children;

}