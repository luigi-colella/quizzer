
import { Component, OnInit } from '@angular/core';
import { QuizPersonality } from '../../interfaces/quizPersonality';
import { QuizHandler } from '../../services/quiz-handler.service';

import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

@Component({
    selector: 'app-quiz-runner',
    templateUrl: './quiz-runner.component.html',
    styleUrls: ['./quiz-runner.component.css']
})
export class QuizRunnerComponent implements OnInit {

    //private current_quiz;
    curQuiz : QuizPersonality;
    quizState : 'ready' | 'started' | 'finished';
    curQuestion;
    submitButtonIsDisabled : boolean = false;
    quizResult: object;

    constructor(private handler : QuizHandler){}

    ngOnInit(){
        this.loadQuiz();
    }

    loadQuiz() : void {
        this.handler.load(mockQuiz);
        this.curQuiz = this.handler.getQuizObject();
        this.quizState = 'ready';
    }

    onSubmit() : void {
        switch(this.quizState){
            case 'ready':
                this.quizState = 'started';
                this.goNextQuestion();
            break;

            case 'started':
                this.goNextQuestion();
            break;

            case 'finished':
                this.resetQuiz();
            break;
        }
    }

    goNextQuestion() : void {
        this.curQuestion = this.handler.getNextQuestion();
        if(this.curQuestion) {
            this.submitButtonIsDisabled = true;
        } else {
            this.setResult();
        }

    }

    selectAnswer(answer : string) : void {
        this.handler.giveAnswer(answer);
        this.submitButtonIsDisabled = false;
    }

    setResult() : void {
        this.quizResult = this.handler.getResult();
        this.curQuestion = undefined;
        this.quizState = 'finished';
    }

    resetQuiz() : void {
        this.quizState = 'ready';
        this.handler.resetQuiz();
    }

};