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

    answers: Array<Answer>

}

type AnswerValue = string | number;

export type UserAnswers = AnswerValue[];

export type Answer = {
    value: AnswerValue,
    title: string,
    description: string
}