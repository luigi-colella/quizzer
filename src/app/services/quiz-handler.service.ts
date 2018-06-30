import { Injectable } from '@angular/core';
import { QuizPersonality, Answer, Profile, Question, Settings } from '../interfaces/quizPersonality';


@Injectable()
export class QuizHandler {

    private currentQuiz : QuizPersonality;
    private currentQuestionIndex: number;
    private answers = [];

    constructor(){
        this.resetQuiz();
    }

    load(quiz: QuizPersonality) : this {
        this.currentQuiz = quiz;
        return this;
    }

    getQuizObject() : QuizPersonality {
        return Object.assign({}, this.currentQuiz);
    }

    getNextQuestion() : object | false {
        if( typeof this.currentQuestionIndex === 'number'){
            if( this.currentQuestionIndex === this.currentQuiz.questions.length - 1 ) return false; //Questions are finished
            this.currentQuestionIndex += 1;
        } else {
            this.currentQuestionIndex = 0;
        }
        let question = this.currentQuiz.questions[this.currentQuestionIndex];
        return Object.assign({}, question, {
            number: this.currentQuestionIndex + 1
        });
    }

    giveAnswer(answer: string) : void {
        this.answers[this.currentQuestionIndex] = answer;
    }

    getResult() {
        //Get array of matched profile in every question
        let matchedProfileIds = this.answers.map((answer, index) => {
            return this.currentQuiz.questions[index].answers.filter((answerObj) => {
                return answer === answerObj.answer;
            })[0].profileId;
        });
        //Get id of most called among them
        let mostFrequentId: number = (() => {
            let ids = {};
            matchedProfileIds.forEach((value) => {
                if(!ids.hasOwnProperty(value)) ids[value] = 1;
                else ids[value] += 1;
            });
            let mostCalledId;
            for (let id in ids){
                if(ids.hasOwnProperty(id)){
                    let obj = {
                        id: Number(id),
                        num: ids[id]
                    };
                    mostCalledId = ( typeof mostCalledId === 'undefined' || mostCalledId.num < obj.num ? obj : mostCalledId );
                }
            }
            return mostCalledId.id;
        })();
        //Return right profile object
        return this.currentQuiz.profiles.filter((obj) => {
            return obj.id === mostFrequentId;
        })[0];
    }

    resetQuiz() : void {
        this.currentQuestionIndex = undefined;
        this.answers = [];
    }

}