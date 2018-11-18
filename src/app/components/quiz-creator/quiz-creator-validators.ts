/* Vendor imports */
import { 
    AbstractControl, FormArray, FormControl, FormGroup, NgForm,
    Validators, ValidatorFn, ValidationErrors, FormGroupDirective
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/* App imports */
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../constants';

export const validators = {

    validText: (): ValidatorFn => {
        return (control: AbstractControl) : {[key: string]: any} | null => {
            let errorMsg: string;
            let inputValue = control.value;
            if (inputValue === '') errorMsg = 'errorMissingInput'
            else if (typeof inputValue === 'string' && inputValue.trim() === '') errorMsg = 'errorInvalidInput'
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
            return !valid ? { 'validQuizType': { text: 'errorInvalidQuizType' } } : null
        }
    },

    validAnswerValue: (quizForm: FormGroup): ValidatorFn => {
        return (control: AbstractControl) : ValidationErrors | null => {
            if (typeof quizForm === 'undefined') return null; //To prevent errors during bootstrapp
            let quizType = quizForm.get('settings').get('type').value;
            let inputValue = control.value;
            if (quizType === PERSONALITY_QUIZ){
                return !inputValue ? { 'validAnswerValue' : { text: 'errorMissingInput' } } : null
            } else if (quizType === TRUEORFALSE_QUIZ) {
                return typeof inputValue !== 'boolean' ? { 'validAnswerValue' : { text: 'errorInvalidTrueOrFalseValue' } } : null
            } else {
                return { 'validAnswerValue' : { text: 'errorInvalidQuizType' } }
            }
        }
    },
    
    validImageUrl: Validators.pattern(/.*.(jpg|jpeg|gif|png)((\?.*)$|$)/mg)

}


export class QuizCreatorErrorStateMatcher implements ErrorStateMatcher {
    isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isFormSubmitted = form && form.submitted;
        const isControlUsed = control.dirty || control.touched || isFormSubmitted;
        return !!(control && isControlUsed && control.invalid);
    }
}