
import { Component, OnInit } from '@angular/core';
import { 
    FormBuilder, FormArray, 
    Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl,
    FormGroupDirective, NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { QuizType, PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../interfaces/quizTypes';

//Quiz errors matcher
class QuizCreatorErrorStateMatcher implements ErrorStateMatcher {
    isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isFormSubmitted = form && form.submitted;
        const isControlUsed = control.dirty || control.touched || isFormSubmitted;
        return !!(control && isControlUsed && control.invalid);
    }
}

@Component({
    selector: 'app-quiz-generator',
    templateUrl: './quiz-creator.component.html',
    styleUrls: ['./quiz-creator.component.scss']
})
export class QuizCreatorComponent implements OnInit {

    //Mapped quiz types for template
    quizTypesMap = {
        [PERSONALITY_QUIZ]: "Quiz della personalità",
        [TRUEORFALSE_QUIZ]: "Vero o Falso"
    }
    //Array of quiz types for template;
    quizTypes = Object.keys(this.quizTypesMap);
    //Validators for input
    quizValidators = {
        validText: (): ValidatorFn => {
            return (control: AbstractControl) : {[key: string]: any} | null => {
                let errorMsg: string;
                let inputValue = control.value;
                if (inputValue === '') errorMsg = 'campo mancante'
                else if (typeof inputValue === 'string' && inputValue.trim() === '') errorMsg = 'testo non valido'
                else return null;
                return { 'validText': { text: errorMsg } };
            }
        },
        validItems: (): ValidatorFn => {
            return (control: FormArray) : {[key: string] : any} | null => {
                let valid = control.valid && control.length > 0;
                return !valid ? { 'validItems': true } : null;
            }
        },
        validQuizType: (): ValidatorFn => {
            return (control: AbstractControl) : ValidationErrors | null => {
                let valid = control.value === PERSONALITY_QUIZ || control.value === TRUEORFALSE_QUIZ;
                return !valid ? { 'validQuizType': { text: 'tipo di quiz non riconosciuto' } } : null
            }
        },
        validAnswerValue: (): ValidatorFn => {
            return (control: AbstractControl) : ValidationErrors | null => {
                if (typeof this.quiz === 'undefined') return null; //To prevent errors during bootstrapp
                let quizType = this.quiz.get('type').value;
                let inputValue = control.value;
                if (quizType === PERSONALITY_QUIZ){
                    return typeof inputValue === 'string' && inputValue.trim() === '' ? { 'validAnswerValue' : { text: 'testo vuoto' } } : null
                } else if (quizType === TRUEORFALSE_QUIZ) {
                    return typeof inputValue !== 'boolean' ? { 'validAnswerValue' : { text: 'formato vero o falso non corretto' } } : null
                } else {
                    return { 'validAnswerValue' : { text: 'tipo di quiz non valido' } }
                }
            }
        }
    }
    //Builders for reactive form
    quizBuilders = (() => {

        const emptyAnswer = () => {
            return this.ngFormBuilder.group({
                text: ['', this.quizValidators.validText()],
                value: ['', this.quizValidators.validAnswerValue()]
            })
        }
        const emptyQuestion = () => {
            return this.ngFormBuilder.group({
                text: ['', this.quizValidators.validText()],
                answers: this.ngFormBuilder.array([ emptyAnswer() ], this.quizValidators.validItems())
            })
        }
        const emptyResult = () => {
            return this.ngFormBuilder.group({
                value: ['', this.quizValidators.validText()],
                title: ['', this.quizValidators.validText()],
                description: ['', this.quizValidators.validText()]
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
        title: ['', this.quizValidators.validText()],
        description: ['', this.quizValidators.validText()],
        type: ['', this.quizValidators.validQuizType()],
        questions: this.ngFormBuilder.array([ /*this.quizBuilders.emptyQuestion()*/ ], this.quizValidators.validItems()),
        answers: this.ngFormBuilder.array([ /*this.quizBuilders.emptyResult()*/ ], this.quizValidators.validItems())
    })
    //Errors state matcher
    errorMatcher = new QuizCreatorErrorStateMatcher();

    constructor( private ngFormBuilder: FormBuilder ){
        console.log(this.quiz);
    }

    ngOnInit(){

    }

    onSubmit(){
        console.log(this.quiz);
    }

    onReset () {
        //Remove all questions
        let questions = this.quiz.get('questions') as FormArray;
        for (let i = questions.length; i >= 0; i--) questions.removeAt(i);
        //Remove all answers
        let answers = this.quiz.get('answers') as FormArray;
        for (let i = answers.length; i >= 0; i--) answers.removeAt(i);
        //Finally reset quiz
        this.quiz.reset();
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

    //Event handlers for stepper
    handleStepper = (() => {

        const submitSettings = () => {
            //Mark as dirty the inputs of this stepper group in order to get possibles errors from they
            this.quiz.get('title').markAsDirty();
            this.quiz.get('description').markAsDirty();
            this.quiz.get('type').markAsDirty();
        }
        const submitQuestions = () => {
            this.quiz.get('questions');
        }
        const submitAnswers = () => {}

        return {
            submitSettings,
            submitQuestions,
            submitAnswers
        }

    })()

}