
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

import { QuizType } from '../../interfaces/quizTypes';

@Component({
    selector: 'app-quiz-generator',
    templateUrl: './quiz-creator.component.html',
    styleUrls: ['./quiz-creator.component.scss']
})
export class QuizCreatorComponent implements OnInit {

    //Avaible type of quiz
    quizTypes : QuizType[] = ['personalityQuiz', 'trueorfalseQuiz'];
    //Mapped quiz types for template
    quizTypesMap = {
        personalityQuiz: "Quiz della personalità",
        trueorfalseQuiz: "Vero o Falso"
    }
    //Builders for reactive form
    quizBuilders = (() => {

        const emptyAnswer = () => {
            return this.ngFormBuilder.group({
                text: 'randomText',
                value: 'randomValue'
            })
        }
    
        const emptyQuestion = () => {
            return this.ngFormBuilder.group({
                text: 'textToInsert',
                answers: this.ngFormBuilder.array([ emptyAnswer() ])
            })
        }
    
        const emptyResult = () => {
            return this.ngFormBuilder.group({
                value: 'Valore',
                title: 'Titolo',
                description: 'Descrizione'
            })
        }

        return {
            emptyAnswer,
            emptyQuestion,
            emptyResult
        }

    })()
    //Reactive form to create a new quiz
    quiz = this.ngFormBuilder.group({
        title: ['buzz', Validators.required],
        description: ['desc'],
        type: [''],
        questions: this.ngFormBuilder.array([ this.quizBuilders.emptyQuestion() ]),
        answers: this.ngFormBuilder.array([ this.quizBuilders.emptyResult() ])
    })

    constructor( private ngFormBuilder: FormBuilder ){
    }

    ngOnInit(){}

    onSubmit(){
        console.log(this.quiz.value);
    }

    //Event handlers for questions
    handleQuestions = (() => {

        let questions = this.quiz.get('questions') as FormArray;

        const addNew = () => {
            questions.push(this.quizBuilders.emptyQuestion());
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
    
        return {
            addNew,
            remove,
            addNewAnswer,
            removeAnswer
        }

    })()
    
    //Event handlers for Answers
    handleAnswers = (() => {

        let answers = this.quiz.get('answers') as FormArray;

        const addNew = () => {
            answers.push(this.quizBuilders.emptyResult());
        }
    
        const remove = (index: number) => {
            answers.removeAt(index);
        }

        return {
            addNew,
            remove
        }

    })()

}