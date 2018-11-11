/* Vendor imports */
import { Component, OnInit } from '@angular/core';
/* App imports */
import { QuizDatabase } from '../../services/quizDatabase.service';
import { Quiz } from '../../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../constants';

@Component({
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

    quizzes: Quiz[]
    quizTypes = {
        [PERSONALITY_QUIZ]: 'Quiz della personalità',
        [TRUEORFALSE_QUIZ]: 'Vero o falso'
    }

    constructor(
        private quizDatabase: QuizDatabase
    ){}

    ngOnInit () {
        this.fetchAllQuizzes();
    }

    /**
     * Fetch all available quiz and store them in the component instance
     */
    fetchAllQuizzes () {
        this.quizDatabase.getAll().subscribe({
            next: allQuizzes => this.quizzes = allQuizzes
        });
    }

}