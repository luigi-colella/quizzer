import { Injectable } from '@angular/core';

import { QuizPersonality, Answer, Profile, Question, Settings } from '../interfaces/quizPersonality';

@Injectable()
export class QuizHandler {

    private currentQuiz : QuizPersonality;

    load(quiz: QuizPersonality) : this {
        this.currentQuiz = quiz;
        return this;
    }

    getQuizObject() : QuizPersonality {
        return Object.assign({}, this.currentQuiz);
    }

}