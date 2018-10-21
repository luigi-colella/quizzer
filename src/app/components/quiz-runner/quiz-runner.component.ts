
import { Component, OnInit } from '@angular/core';
import { Quiz, AnswerValue } from '../../interfaces/quiz';
import { QuizHandler } from '../../services/quiz-handler.service';
import { FileLoader } from '../../services/fileLoader.service';

import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

type FileInputEvent = Event & {target:{files: FileList}};
type FileLoaderEvent = Event & {target:{result:string}};

@Component({
    selector: 'app-quiz-runner',
    templateUrl: './quiz-runner.component.html',
    styleUrls: ['./quiz-runner.component.scss']
})
export class QuizRunnerComponent implements OnInit {

    //private current_quiz;
    curQuiz : Quiz;
    curQuestionIndex : number;
    curQuizResult: Quiz['answers'][0];
    givenUserAnswers: AnswerValue[];
    quizState : 'ready' | 'started' | 'finished';
    submitButtonIsDisabled : boolean = false;

    constructor(
        private handler : QuizHandler,
        private fileLoader: FileLoader
    ){}

    ngOnInit(){
        this.loadQuiz(this.handler.load(mockQuiz).getQuizObject());
    }

    uploadQuiz(event: FileInputEvent) {
        let uploadedFiles = event.target.files;
        if (uploadedFiles.length === 1) {
            let file: File = uploadedFiles[0];
            let reader: FileReader = new FileReader();
            // Reader's events
            reader.onerror = (event: ErrorEvent) => { throw 'Error in file upload: ' + event.message };
            reader.onload = (event: FileLoaderEvent) => {
                let quiz = this.fileLoader.decode(event.target.result) as Quiz;
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
        this.handler.load(quiz);
        this.curQuiz = quiz;
    }

    onSubmit() : void {

        switch(this.quizState){
            case 'ready':
                this.quizState = 'started';
                this.curQuestionIndex = 0;
                this.submitButtonIsDisabled = true;
            break;

            case 'started':

                if(this.curQuestionIndex + 1 === this.curQuiz.questions.length){
                    this.curQuizResult = this.handler.getResult(this.givenUserAnswers);
                    this.quizState = 'finished';
                } else {
                    this.curQuestionIndex += 1;
                    this.submitButtonIsDisabled = true;
                }

            break;

            case 'finished':
                this.resetQuiz();
            break;

        }

    }

    selectAnswer(answer : AnswerValue) {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    }

    resetQuiz() {
        this.quizState = 'ready';
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    }

};