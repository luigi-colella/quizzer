
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { QuizType, PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../interfaces/quizTypes';

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
    //Validators for input
    quizValidators = {
        validText: (): ValidatorFn => {
            return (control: AbstractControl) : {[key: string]: any} | null => {
                return control.value.trim() === '' ? { 'validText': { text: 'Testo vuoto' } } : null;
            }
        },
        validQuizType: (): ValidatorFn => {
            return (control: AbstractControl) : ValidationErrors | null => {
                let valid = control.value === PERSONALITY_QUIZ || control.value === TRUEORFALSE_QUIZ;
                return !valid ? { 'validQuizType': { text: 'Tipo di quiz non riconosciuto' } } : null
            }
        },
        validAnswerValue: (): ValidatorFn => {
            return (control: AbstractControl) : ValidationErrors | null => {
                if (typeof this.quiz === 'undefined') return null; //To prevent errors during bootstrapp
                let quizType = this.quiz.get('type').value;
                let inputValue = control.value;
                if (quizType === PERSONALITY_QUIZ){
                    return inputValue.trim() === '' ? { 'validAnswerValue' : { text: 'Testo vuoto' } } : null
                } else if (quizType === TRUEORFALSE_QUIZ) {
                    return typeof inputValue !== 'boolean' ? { 'validAnswerValue' : { text: 'Formato vero o falso non corretto' } } : null
                } else {
                    return { 'validAnswerValue' : { text: 'Tipo di quiz non valido' } }
                }
            }
        }
    }
    //Builders for reactive form
    quizBuilders = (() => {

        const emptyAnswer = () => {
            return this.ngFormBuilder.group({
                text: ['randomText', this.quizValidators.validText()],
                value: ['randomValue', this.quizValidators.validAnswerValue()]
            })
        }
        const emptyQuestion = () => {
            return this.ngFormBuilder.group({
                text: ['textToInsert', this.quizValidators.validText()],
                answers: this.ngFormBuilder.array([ emptyAnswer() ])
            })
        }
        const emptyResult = () => {
            return this.ngFormBuilder.group({
                value: ['Valore', this.quizValidators.validText()],
                title: ['Titolo', this.quizValidators.validText()],
                description: ['Descrizione', this.quizValidators.validText()]
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
        title: ['buzz', this.quizValidators.validText()],
        description: ['desc', this.quizValidators.validText()],
        type: ['', this.quizValidators.validQuizType()],
        questions: this.ngFormBuilder.array([ this.quizBuilders.emptyQuestion() ]),
        answers: this.ngFormBuilder.array([ this.quizBuilders.emptyResult() ])
    })
    //Current displayed tab
    currentTab: 'settings' | 'questions' | 'results' | 'all' = 'settings';

    constructor( private ngFormBuilder: FormBuilder ){}

    ngOnInit(){}

    onSubmit(){
        console.log(this.quiz);
    }

    //Event handlers for the page
    handlePage = (() => {

        const selectTab = (tabName: 'settings' | 'questions' | 'results' | 'all') => {
            if (this.currentTab !== tabName) this.currentTab = tabName;
        }

        return {
            selectTab
        }

    })()

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