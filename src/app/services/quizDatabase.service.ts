/* Vendor imports */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
/* App imports */
import { Quiz, AnswerValue, Result } from '../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../constants';

@Injectable()
export class QuizDatabase {

    constructor(
        private http: HttpClient
    ) {}

    private data = [
        'trueorfalse-1',
        'trueorfalse-2'
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
        let path = '../../assets/quizzes/' + this.data[id] + '.json';
        return this.http.get<Quiz>(path);
    }

}