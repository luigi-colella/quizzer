import { QuizType } from './quizTypes';

export class Quiz {

    settings: {
        title: string,
        description: string,
        type: QuizType
    }

    questions: Array<{
        text: string,
        answers: Array<{
            text: string,
            value: AnswerValue
        }>
    }>

    answers: Array<{
        value: string,
        title: string,
        description: string
    }>

}

//Value of answer given from user
export type AnswerValue = string | boolean;