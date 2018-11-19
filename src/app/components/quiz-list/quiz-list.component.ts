/* Vendor imports */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/* App imports */
import { QuizDatabase } from '../../services/quizDatabase.service';
import { Quiz } from '../../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../constants';
import { AppLocalization } from '../../services/appLocalization.service';
import { LanguageMap } from '../../langMapType';

@Component({
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit, OnDestroy {

    quizzes: Quiz[]
    languageMap: LanguageMap
    languageMapSubscription: Subscription

    constructor(
        private quizDatabase: QuizDatabase,
        private localization: AppLocalization
    ){}

    ngOnInit () {
        this.fetchAllQuizzes();
        this.languageMap = {} as LanguageMap;
        this.languageMapSubscription = this.localization.getLanguageMap().subscribe({
            next: (map) => this.languageMap = map
        })
    }

    ngOnDestroy () {
        this.languageMapSubscription.unsubscribe();
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