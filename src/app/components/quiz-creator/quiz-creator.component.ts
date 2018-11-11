/* Vendor imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
/* App imports */
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { QuizHandler } from '../../services/quizHandler.service';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../constants';
import { Quiz, QuizType } from '../../types';
import { validators as customValidators, QuizCreatorErrorStateMatcher as customErrorMatcher } from './quiz-creator-validators';

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
    //Builders for reactive form
    quizBuilders = {

        emptyAnswer: (): FormGroup => {
            return this.ngFormBuilder.group({
                text: ['', customValidators.validText()],
                value: ['', customValidators.validAnswerValue(this.quiz)]
            })
        },
        emptyQuestion: (): FormGroup => {
            return this.ngFormBuilder.group({
                text: ['', customValidators.validText()],
                answers: this.ngFormBuilder.array([ this.quizBuilders.emptyAnswer() ], customValidators.validItems())
            })
        },
        emptyResult: (): FormGroup => {
            return this.ngFormBuilder.group({
                value: ['', customValidators.validText()],
                title: ['', customValidators.validText()],
                description: ['', customValidators.validText()],
                imageUrl: ['', customValidators.validImageUrl]
            })
        }

    }
    //Reactive form to create a new quiz
    quiz = this.ngFormBuilder.group({
        settings: this.ngFormBuilder.group({
            title: ['', customValidators.validText()],
            description: ['', customValidators.validText()],
            type: ['', customValidators.validQuizType()],
            imageUrl: ['', customValidators.validImageUrl]
        }),
        questions: this.ngFormBuilder.array([ /*this.quizBuilders.emptyQuestion()*/ ], customValidators.validItems()),
        answers: this.ngFormBuilder.array([ /*this.quizBuilders.emptyResult()*/ ], customValidators.validItems())
    })
    // Errors state matcher
    errorMatcher = new customErrorMatcher();
    // Input dialog reference
    dialogFormRef: MatDialogRef<DialogFormComponent>

    constructor(
        private ngFormBuilder: FormBuilder,
        private ngDialog: MatDialog,
        private quizHandler: QuizHandler
    ){}

    ngOnInit(){

    }

    onSubmit(){
        if (this.quiz.invalid) return;
        // Create JSON to download
        let encodedJSON = this.quizHandler.encode(this.quiz.value);
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
            (this.quiz.get('answers') as FormArray).push(this.quizBuilders.emptyResult());
        },
        remove: (index: number) => {
            (this.quiz.get('answers') as FormArray).removeAt(index);
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