import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormArray, FormGroup } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../../interfaces/quizTypes';

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

    questions: FormArray;
    dataChange: BehaviorSubject<FileNode[]>;
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;
    quizTypes = {
        'trueorfalseQuiz': TRUEORFALSE_QUIZ,
        'personalityQuiz': PERSONALITY_QUIZ
    }

    constructor () {}

    ngOnInit () {
        console.log(this.quiz);
        this.setTreeConfiguration();
    }

    _buildFileTree( quizQuestionsObj: FormArray ): FileNode[] {
        if (!quizQuestionsObj.hasOwnProperty('controls')) return;

        return quizQuestionsObj.controls.map((oQuestion: FormGroup, parentIndex: number): FileNode => {
            let text = oQuestion.controls.text as FormControl;
            let answers = oQuestion.controls.answers as FormArray;
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
                        valueEditable: typeof value.value === 'string' && value.value.trim() === '',
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
        this.nestedTreeControl = new NestedTreeControl<FileNode> ((node: FileNode) => node.children);
        //Set data in tree control to use expand/ collapse methods
        this.nestedTreeControl.dataNodes = treeData;
        //Set Tree Data Source
        this.nestedDataSource = new MatTreeNestedDataSource();
        //Creata an observable to monitor data changes
        this.dataChange = new BehaviorSubject<FileNode[]>([]);
        //Notify first data change
        this.dataChange.next(treeData);
        //Subscribe to observable in order to update Tree Data Source and Tree Control every change
        this.dataChange.subscribe((data) => {
            this.nestedDataSource.data = data;
            this.nestedTreeControl.dataNodes = data;
        });
    }

    //Set event handlers for questions
    handleQuestions = {

        _updateObservable: () => {
            //If data changes also its reference will change, so it's need to store opened nodes to re-expand after change
            let openedNodes;
            if (this.nestedTreeControl.dataNodes) {
                openedNodes = this.nestedTreeControl.dataNodes
                .filter((node: FileNode) => this.nestedTreeControl.isExpanded(node))
                .map((node: FileNode) => node.text)
            }
            //Build new Tree
            const newTree = this._buildFileTree(this.questions);
            //Notify it to observable
            this.dataChange.next(newTree);
            //Re-expand opened-before nodes
            if (openedNodes) {
                newTree.forEach((node: FileNode) => {
                    if (openedNodes.indexOf(node.text) !== -1) this.nestedTreeControl.expand(node);
                    else this.nestedTreeControl.collapse(node);
                })
            }
        },
        toggleEditable: (type: 'text' | 'value', node: FileNode) => {
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
            
        },
        addNew: () => {
            this.questions.push(this.quizBuilders.emptyQuestion());
            this.handleQuestions._updateObservable();
            //Expand last created node
            this.nestedTreeControl.expand(
                this.nestedTreeControl.dataNodes[this.nestedTreeControl.dataNodes.length - 1]
            );
        },
        remove: (index: number) => {
            this.questions.removeAt(index);
            this.handleQuestions._updateObservable();
        },
        addNewAnswer: (node: FileNode) => {
            //Get questions FormArray
            let formGroup = node.text.parent as FormGroup;
            let answers = formGroup.get('answers') as FormArray;
            //Add new answer
            answers.push(this.quizBuilders.emptyAnswer());
            this.handleQuestions._updateObservable();
        },
        removeAnswer: (answerIndex: number, questionIndex: number) => {
            let answers = this.questions.at(questionIndex).get('answers') as FormArray;
            answers.removeAt(answerIndex);
            this.handleQuestions._updateObservable();
        }

    }

    //Function used from tree in template to know if a node has nested childs
    hasNestedChild = (_: number, nodeData: FileNode) => nodeData.children;

}