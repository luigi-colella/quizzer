/* Vendor imports */
import { Component, OnInit } from '@angular/core';
/* App imports */
import { Quiz, AnswerValue } from '../../types';
import { QuizHandler } from '../../services/quizHandler.service';
/* Quiz sample imports */
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

type FileInputEvent = Event & { target: { files: FileList } };
type FileLoaderEvent = Event & { target: { result: string } };
interface QuizStates {
    READY: 'ready',
    STARTED: 'started',
    FINISHED: 'finished'
}

@Component({
    selector: 'app-quiz-runner',
    templateUrl: './quiz-runner.component.html',
    styleUrls: ['./quiz-runner.component.scss']
})
export class QuizRunnerComponent implements OnInit {

    //private current_quiz;
    curQuiz: Quiz;
    curQuestionIndex: number;
    curQuizResult: Quiz['answers'][0];
    givenUserAnswers: AnswerValue[];
    quizState: QuizStates['READY'] | QuizStates['STARTED'] | QuizStates['FINISHED']
    quizAvailableStates: QuizStates = {
        READY: 'ready',
        STARTED: 'started',
        FINISHED: 'finished'
    }
    submitButtonIsDisabled: boolean = false;

    constructor(
        private quizHandler : QuizHandler
    ){}

    ngOnInit(){
        this.loadQuiz(this.quizHandler.load(mockQuiz).getQuizObject());
        document.addEventListener('keydown', this.onKeyboardEnterEvent);
    }

    ngOnDestroy () {
        document.removeEventListener('keydown', this.onKeyboardEnterEvent);
    }

    onKeyboardEnterEvent = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') this.onSubmit();
    }

    uploadQuiz(event: FileInputEvent) {
        let uploadedFiles = event.target.files;
        if (uploadedFiles.length === 1) {
            let file: File = uploadedFiles[0];
            let reader: FileReader = new FileReader();
            // Reader's events
            reader.onerror = (event: ErrorEvent) => { throw 'Error in file upload: ' + event.message };
            reader.onload = (event: FileLoaderEvent) => {
                let quiz = this.quizHandler.decode(event.target.result);
                this.loadQuiz(quiz);
            }
            // Start reader
            reader.readAsDataURL(file);
        } else {
            throw 'Number of uploaded files not correct: ' + uploadedFiles.length;
        }
    }

    loadQuiz(quiz: Quiz) {
        this.resetQuiz();
        this.quizHandler.load(quiz);
        this.curQuiz = quiz;
    }

    onSubmit() : void {

        switch(this.quizState){
            case this.quizAvailableStates.READY:
                this.quizState = this.quizAvailableStates.STARTED;
                this.curQuestionIndex = 0;
                this.submitButtonIsDisabled = true;
            break;

            case this.quizAvailableStates.STARTED:
                if (!this.givenUserAnswers[this.curQuestionIndex]) return;
                if(this.curQuestionIndex + 1 === this.curQuiz.questions.length){
                    this.curQuizResult = this.quizHandler.getResult(this.givenUserAnswers);
                    this.quizState = this.quizAvailableStates.FINISHED;
                } else {
                    this.curQuestionIndex += 1;
                    this.submitButtonIsDisabled = true;
                }
            break;

            case this.quizAvailableStates.FINISHED:
                this.resetQuiz();
            break;

        }

    }

    selectAnswer(answer : AnswerValue) {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    }

    resetQuiz() {
        this.quizState = this.quizAvailableStates.READY;
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    }

};