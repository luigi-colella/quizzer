
import { Component, OnInit } from '@angular/core';
import { Quiz, UserAnswers, Answer } from '../../interfaces/quiz';
import { QuizHandler } from '../../services/quiz-handler.service';

import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

@Component({
    selector: 'app-quiz-runner',
    templateUrl: './quiz-runner.component.html',
    styleUrls: ['./quiz-runner.component.css']
})
export class QuizRunnerComponent implements OnInit {

    //private current_quiz;
    curQuiz : Quiz;
    curQuestionIndex : number;
    curQuizResult: Answer;
    givenUserAnswers: UserAnswers;
    quizState : 'ready' | 'started' | 'finished';
    submitButtonIsDisabled : boolean = false;

    constructor(private handler : QuizHandler){}

    ngOnInit(){
        this.loadQuiz();
    }

    loadQuiz() : void {
        this.curQuiz = this.handler.load(mockQuiz).getQuizObject();
        this.resetQuiz();
        console.log(this.curQuiz);
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

    selectAnswer(answer : string) : void {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    }

    resetQuiz() : void {
        this.quizState = 'ready';
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    }

};