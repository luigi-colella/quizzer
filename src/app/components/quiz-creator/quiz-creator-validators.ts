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
            let quizType = quizForm.get('settings').get('type').value;
            let error: ValidationErrors | null;
            if (quizType === PERSONALITY_QUIZ){
                error = !control.value ? { 'validAnswerValue' : { text: 'errorMissingInput' } } : null
            } else if (quizType === TRUEORFALSE_QUIZ) {
                error = typeof control.value !== 'boolean' ? { 'validAnswerValue' : { text: 'errorInvalidTrueOrFalseValue' } } : null
            } else {
                error = { 'validAnswerValue' : { text: 'errorInvalidQuizType' } }
            }
            return error;
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