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

    results: Result[]

}

//Value of answer given from user
export type AnswerValue = string | boolean;

//Result of test
export type Result = {
    value: string,
    title: string,
    description: string
}