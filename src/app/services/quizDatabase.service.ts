/* Vendor imports */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
/* App imports */
import { Quiz, AnswerValue, Result } from '../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../constants';

@Injectable()
export class QuizDatabase {

    constructor(
        private http: HttpClient,
        private location: Location
    ) {}

    private data = [
        'personality-your-animal-it',
        'personality-your-animal-en',
        'personality-your-job-it',
        'personality-your-job-en',
        'trueorfalse-general-it',
        'trueorfalse-general-en',
        'trueorfalse-heritage-it',
        'trueorfalse-heritage-en',
        'trueorfalse-2',
        'trueorfalse-3'
    ]

    /**
     * Get all available quiz objects
     * @return {Object} an observable that emits all quiz objects
     */
    getAll (): Observable<Quiz[]> {
        return zip(
            ...Object.keys(this.data).map((id) => { return this.get(Number(id)) })
        );
    }

    /**
     * Request a quiz object
     * @param {number} id id of quiz
     * @return {Object} an observable that emits the quiz object
     */
    get (id: number): Observable<Quiz> {
        if (id > this.data.length - 1) throw 'Provided invalid id';
        let path = 'assets/quizzes/' + this.data[id] + '.json';
        let quizUrl = this.location.prepareExternalUrl(path);
        return this.http.get<Quiz>(quizUrl);
    }

}