import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';

//FileNode Model
class FileNode {
    nodeName: string;
    nodeValue: any;
    children: FileNode[];
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

    dataChange: BehaviorSubject<FileNode[]>;
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;
    handleQuestions;

    constructor () {}

    ngOnInit () {
        console.log(this.quiz);
        this.setTreeConfiguration();
        this.setHandleQuestions();
    }

    /**
     * Build a Tree Data Object from a JSON Data Object
     * @param obj data object
     * @param level parameter used for recursion
     * @return {FileNode[]} fileNode list for data source
     */
    _buildFileTree(obj: object, level: number): FileNode[] {
        return Object.keys(obj).reduce<FileNode[]> ((accumulator, key) => {
          const value = obj[key];
          const node = new FileNode();
          node.nodeName = key;
    
          if (value != null) {
            if (typeof value === 'object') {
              node.children = this._buildFileTree(value, level + 1);
            } else {
              node.nodeValue = value;
            }
          }
    
          return accumulator.concat(node);
        }, []);
    }

    //Configure tree component
    setTreeConfiguration = () => {
        //Create Tree Data Object
        const jsonData = this.quiz.get('questions').value;
        const treeData = this._buildFileTree(jsonData, 0);
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
    setHandleQuestions = () => {

        let questions = this.quiz.get('questions') as FormArray;

        const _updateObservable = () => {
            //Build new Tree
            const newTree = this._buildFileTree(questions.value, 0);
            console.log(questions.value, newTree);
            //Notify it to observable
            this.dataChange.next(newTree);
        }
        const addNew = () => {
            questions.push(this.quizBuilders.emptyQuestion());
            _updateObservable();
        }
        const remove = (index: number) => {
            questions.removeAt(index);
        }
        const addNewAnswer = (questionIndex: number) => {
            let answers = questions.at(questionIndex).get('answers') as FormArray;
            answers.push(this.quizBuilders.emptyAnswer());
        }
        const removeAnswer = (answerIndex: number, questionIndex: number) => {
            let answers = questions.at(questionIndex).get('answers') as FormArray;
            answers.removeAt(answerIndex);
        }
    
        this.handleQuestions = {
            addNew,
            remove,
            addNewAnswer,
            removeAnswer
        }

    }

    //Function used from tree in template to know if a node has nested childs
    hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.nodeValue;

}