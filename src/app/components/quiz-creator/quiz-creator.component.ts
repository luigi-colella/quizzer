
import { Component, OnInit } from '@angular/core';
import { 
    FormBuilder, FormArray, 
    Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl,
    FormGroupDirective, NgForm, FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DialogFormComponent } from './dialog-form/dialog-form.component';

import { QuizType, PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../interfaces/quizTypes';
import { FileLoader } from '../../services/fileLoader.service';
import { Quiz } from '../../interfaces/quiz';

//Quiz errors matcher
class QuizCreatorErrorStateMatcher implements ErrorStateMatcher {
    isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isFormSubmitted = form && form.submitted;
        const isControlUsed = control.dirty || control.touched || isFormSubmitted;
        return !!(control && isControlUsed && control.invalid);
    }
}

@Component({
    selector: 'app-quiz-creator',
    templateUrl: './quiz-creator.component.html',
    styleUrls: ['./quiz-creator.component.scss'],
})
export class QuizCreatorComponent implements OnInit {

    //Object of quiz types for template;
    quizTypes = {
        'trueorfalseQuiz': TRUEORFALSE_QUIZ,
        'personalityQuiz': PERSONALITY_QUIZ
    }
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
                    return !inputValue ? { 'validAnswerValue' : { text: 'testo vuoto' } } : null
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
    // Errors state matcher
    errorMatcher = new QuizCreatorErrorStateMatcher();
    // Input dialog reference
    dialogFormRef: MatDialogRef<DialogFormComponent>

    constructor(
        private ngFormBuilder: FormBuilder,
        private ngDialog: MatDialog,
        private fileLoader: FileLoader
    ){}

    ngOnInit(){

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

    //Event handlers for questions
    handleQuestions = {

        addNew: () => {
            (this.quiz.get('questions') as FormArray ).push(this.quizBuilders.emptyQuestion());
        },
        remove: (questionIndex: number) => {
            (this.quiz.get('questions') as FormArray ).removeAt(questionIndex);
        },
        addNewAnswer: (questionIndex: number) => {
            //Get questions FormArray
            let question = (this.quiz.get('questions') as FormArray).at(questionIndex);
            (question.get('answers') as FormArray).push(this.quizBuilders.emptyAnswer());
        },
        removeAnswer: (answerIndex: number, questionIndex: number) => {
            let question = (this.quiz.get('questions') as FormArray).at(questionIndex);
            let answers = question.get('answers') as FormArray;
            answers.removeAt(answerIndex);
        }

    }

    //Event handlers for answers
    handleAnswers = {

        addNew: () => {
            let answers = this.quiz.get('answers') as FormArray;
            answers.push(this.quizBuilders.emptyResult());
        },
        remove: (index: number) => {
            let answers = this.quiz.get('answers') as FormArray;
            answers.removeAt(index);
        }

    }

    //Handler for suggested answers values
    handleAnswersValue = {
        addSuggestedValue: (inputControl: FormControl) => {
            if (!this.dialogFormRef) {
                this.dialogFormRef = this.ngDialog.open(DialogFormComponent, {
                    data: {
                        inputControl,
                        errorMatcher: this.errorMatcher
                    }
                });
                let subscription = this.dialogFormRef.afterClosed().subscribe(() => {
                    this.dialogFormRef = null;
                    subscription.unsubscribe();
                })
            }
        },
        // Get suggested values based on answers' values
        getSuggestedValues: (): Array<String> => {
            let suggestedValues = [];
            // Get all answer's value from every question
            let questions = this.quiz.get('questions').value as Quiz['questions'];
            questions.forEach(question => {
                question.answers.forEach(answer => {
                    if (!!answer.value && suggestedValues.indexOf(answer.value) === -1) {
                        suggestedValues.push(answer.value)
                    }
                });
            });
            // Get all value from every result
            let answers = this.quiz.get('answers').value as Quiz['answers'];
            answers.forEach(answer => {
                if (!!answer.value && suggestedValues.indexOf(answer.value) === -1) {
                    suggestedValues.push(answer.value)
                }
            })
            return suggestedValues;
        }
    }

    //Template util functions
    getInvalidFormControlsNumber = (form: FormArray & FormGroup): number => {
        return form.controls.reduce((sum, currForm) => {
            return ( currForm.invalid ? sum + 1 : sum );
        }, 0);
    }

    onChangeQuizType = () => {
        let quizType: QuizType = this.quiz.get('settings').get('type').value;
        let questions = this.quiz.get('questions') as FormArray;
        let questionsControls: AbstractControl[] = questions.controls;
        questionsControls.forEach((form: FormGroup) => {
            let answers = form.controls.answers as FormArray;
            let answersControls: AbstractControl[] = answers.controls;
            answersControls.forEach((form: FormGroup) => {
                let valueControl = form.get('value');
                if (
                    (quizType === PERSONALITY_QUIZ && typeof valueControl.value === 'boolean') ||
                    (quizType === TRUEORFALSE_QUIZ && valueControl.value.trim && valueControl.value.trim() !== '' )
                ) valueControl.setValue('');
            });
        });
    }

}