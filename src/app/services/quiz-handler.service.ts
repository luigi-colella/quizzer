import { Injectable } from '@angular/core';
import { Quiz, AnswerValue, Result } from '../interfaces/quiz';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../interfaces/quizTypes';

@Injectable()
export class QuizHandler {

    private currentQuiz : Quiz;
    private currentQuestionIndex: number;
    private answers = [];

    constructor(){
    }

    load(quiz: Quiz) : this {
        this.currentQuiz = quiz;
        return this;
    }

    getQuizObject() : Quiz {
        return Object.assign({}, this.currentQuiz);
    }

    getResult(answers : AnswerValue[]) : Result {
        
        //Results matching with provided answers
        let answerObjs: Result[];
        //Get result according to quiz type
        switch (this.currentQuiz.settings.type){

            case (PERSONALITY_QUIZ) :
                //Create an object where store each answers' value with its frequency
                let answersWithFrequency: {[key: string]: number} = answers.reduce((prevResult, currValue) => {
                    if (typeof currValue !== 'string') throw `Valore di ${currValue} non valido.`;
                    let result = prevResult.hasOwnProperty(currValue) ? prevResult[currValue] += 1 : 1;
                    return Object.assign({}, prevResult, {
                        [currValue]: result
                    })
                }, {});
                
                //Get answer with higher frequency
                let answerWithHigherFrequency: string = 
                    Object.entries(answersWithFrequency)
                    .reduce(
                        (prevResult, currValue) => (currValue[1] > prevResult[1] ? currValue : prevResult)
                    )[0]
                    .trim().toLowerCase();

                //Return result object matching with answerWithHigherFrequency
                answerObjs = this.currentQuiz.answers.filter(
                    (obj) => obj.value.trim().toLowerCase() === answerWithHigherFrequency
                );
            break;
            case (TRUEORFALSE_QUIZ) :
                //Get number of correct answers
                let correctAnswers = 0;
                for (let i = 0; i < answers.length; i++){
                    if (answers[i]) correctAnswers++
                }
                //Filter answer objects matching with number of correct answers
                answerObjs = this.currentQuiz.answers.filter((answerObj) => {
                    let answerValue = answerObj.value;
                    let rangeSeparator = '-'; //If answerValue is a range then it has this separator
                    //Detect if answerValue is a single number or a range
                    if (answerValue.indexOf(rangeSeparator) !== -1){
                        //Get numerical values of the range
                        let maxValue = Math.max( ...answerValue.split(rangeSeparator).map(Number) );
                        let minValue = Math.min( ...answerValue.split(rangeSeparator).map(Number) );
                        //Return if correctAnswers matches with provided range
                        return minValue <= correctAnswers && correctAnswers <= maxValue;
                    } else {
                        //Return if correctAnswers matches with answerObj value
                        return correctAnswers === Number(answerValue); 
                    }
                })
            break;

        }

        //Return first matching result
        return answerObjs[0];

    }

}