
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
    curQuiz : QuizPersonality

    constructor(private handler : QuizHandler){}

    ngOnInit(){
        this.loadQuiz();
    }

    loadQuiz() : void {
        this.handler.load(mockQuiz);
        this.curQuiz = this.handler.getQuizObject();
    }

};