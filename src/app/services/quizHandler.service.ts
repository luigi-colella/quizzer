/* Vendor imports */
import { Injectable } from '@angular/core';
/* App imports */
import { Quiz, AnswerValue, Result } from '../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../constants';

@Injectable()
export class QuizHandler {

    private currentQuiz : Quiz;
    private currentQuestionIndex: number;
    private answers = [];
    private encodingDeclaration = 'data:text/json;charset=utf-8,'

    constructor(){}

    /**
     * Encode the quiz object to URL
     * @param {Object} data the quiz object
     * @return {string} the URL string
     */
    encode (data: Quiz): string {
        return this.encodingDeclaration + encodeURIComponent(JSON.stringify(data));
    }

    /**
     * Decode a URL to quiz object
     * @param {string} string the URL string
     * @return {Object} the quiz object
     */
    decode (string: string): Quiz {
        return JSON.parse(
            atob(
                decodeURIComponent(
                    string.substring(this.encodingDeclaration.length)
                )
            )
        )
    }

    /**
     * Load quiz object into a quizHandler instance to handle it
     * @param quiz the quiz object
     * @return {Object} the current quizHandler instance
     */
    load(quiz: Quiz) : this {
        this.currentQuiz = quiz;
        return this;
    }

    /**
     * Get the quiz object loaded in quizHandler instance
     * @return {Object} the quiz object
     */
    getQuizObject() : Quiz {
        return Object.assign({}, this.currentQuiz);
    }

    /**
     * Process the provided answers and get result according to loaded quiz object
     * @param {Array} answers an array of answer's values
     * @returns {Object} the result object matching the provided answers
     */
    getResult(answers : AnswerValue[]) : Result {

        let answerObjs: Result[];
        if (this.currentQuiz.settings.type === PERSONALITY_QUIZ) {
            answerObjs = this._getResultForPersonaltyType(answers as string[]);            
        } else if (this.currentQuiz.settings.type === TRUEORFALSE_QUIZ) {
            answerObjs = this._getResultForTrueOrFalseType(answers as boolean[]);
        }
        //Return first matching result
        return answerObjs[0];

    }

    /**
     * Process the provided answers basing on the quiz Personality type
     * @param {Array} answers array of given answers
     * @return {Array} array of possible results for provided answers
     */
    private _getResultForPersonaltyType (answers : string[]): Result[] {
        // Sort answers values in order to group them
        let groupedAnswers = answers.sort();
        // Get answer with higher frequency comparing their offset in `groupedArray` array
        let answerWithHigherFrequency = groupedAnswers.sort((a, b) => {
            let aFrequency = groupedAnswers.lastIndexOf(a) - groupedAnswers.indexOf(a);
            let bFrequency = groupedAnswers.lastIndexOf(b) - groupedAnswers.indexOf(b);
            return bFrequency - aFrequency;
        })[0]
        //Return object matching with answerWithHigherFrequency
        return this.currentQuiz.answers.filter(answer => answer.value === answerWithHigherFrequency);
    }

    /**
     * Process the provided answers basing on the quiz True or False type
     * @param {Array} answers array of given answers
     * @return {Array} array of possible results for provided answers 
     */
    private _getResultForTrueOrFalseType (answers: boolean[]): Result[] {
        //Get number of correct answers
        let correctAnswers = 0;
        for (let i = 0; i < answers.length; i++){
            if (answers[i]) correctAnswers++
        }
        // Filter answer objects matching with number of correct answers
        return this.currentQuiz.answers.filter((answer) => {
            let rangeSeparator = '-'; // If `answer.value` is a range then it has this separator
            // Return answer if is between max and min allowed values
            let maxValue = Math.max( ...answer.value.split(rangeSeparator).map(Number) );
            let minValue = Math.min( ...answer.value.split(rangeSeparator).map(Number) );
            return minValue <= correctAnswers && correctAnswers <= maxValue;
        })
    }

}