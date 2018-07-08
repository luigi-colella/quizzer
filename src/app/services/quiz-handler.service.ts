import { Injectable } from '@angular/core';
import { Quiz, Answer, UserAnswers } from '../interfaces/quiz';
import { PERSONALITY_QUIZ } from '../interfaces/quizTypes';

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

    getResult(answers : UserAnswers) : Answer {
        
        //Get result according to quiz type
        switch (this.currentQuiz.settings.type){

            case(PERSONALITY_QUIZ) :
                //Create an object where store answers' value with its frequency
                let answersWithFrequency = {};
                //Iterate on answers' array to populate answersWithFrequency
                answers.forEach((value) => {
                    if(answersWithFrequency.hasOwnProperty(value)){
                        answersWithFrequency[value] += 1;
                    } else {
                        answersWithFrequency[value] = 1;
                    }
                });
                //Find answer with higher frequency
                let answerWithHigherFrequency;
                for (let value in answersWithFrequency){
                    if(answersWithFrequency.hasOwnProperty(value)){
                        let storedValue = answersWithFrequency[answerWithHigherFrequency];
                        let currentValue = answersWithFrequency[value];
                        let cond = typeof storedValue !== 'undefined' && storedValue > currentValue;
                        answerWithHigherFrequency = (cond ? answerWithHigherFrequency : value);
                    }
                }
                //Return answer object matches with answerWithHigherFrequency
                let answerObjs = this.currentQuiz.answers.filter((obj) => {
                    return obj.value.toString().trim().toLowerCase() === answerWithHigherFrequency.trim().toLowerCase();
                });
                return answerObjs[0];

        }

    }

}