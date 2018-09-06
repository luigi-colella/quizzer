
import { Component, OnInit } from '@angular/core';
import { 
    FormBuilder, FormArray, 
    Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl,
    FormGroupDirective, NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { QuizType, PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../interfaces/quizTypes';
import { FileLoader } from '../../services/fileLoader.service';

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
    styleUrls: ['./quiz-creator.component.scss'],
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
                let quizType = this.quiz.get('settings').get('type').value;
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
        settings: this.ngFormBuilder.group({
            title: ['', this.quizValidators.validText()],
            description: ['', this.quizValidators.validText()],
            type: ['', this.quizValidators.validQuizType()],
        }),
        questions: this.ngFormBuilder.array([ /*this.quizBuilders.emptyQuestion()*/ ], this.quizValidators.validItems()),
        answers: this.ngFormBuilder.array([ /*this.quizBuilders.emptyResult()*/ ], this.quizValidators.validItems())
    })
    //Errors state matcher
    errorMatcher = new QuizCreatorErrorStateMatcher();

    constructor(
        private ngFormBuilder: FormBuilder,
        private fileLoader: FileLoader
    ){}

    ngOnInit(){
        console.log(this.quiz);
    }

    onSubmit(){
        if (this.quiz.invalid) return;
        // Create JSON to download
        let encodedJSON = this.fileLoader.encode(this.quiz.value);
        // Create anchor element and attach the JSON to it
        let aEl: HTMLElement = document.createElement('a');
        aEl.setAttribute('href', encodedJSON);
        aEl.setAttribute('download', 'my-quiz.json');
        document.body.appendChild(aEl);
        // Trigger anchor element's click and remove it
        aEl.click();
        aEl.remove();
    }
    
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