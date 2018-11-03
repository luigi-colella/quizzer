
export class Quiz {

    settings: {
        title: string,
        description: string,
        type: 'personalityQuiz' | 'trueorfalseQuiz';
    }

    questions: Array<{
        text: string,
        answers: Array<{
            text: string,
            value: string | boolean;
        }>
    }>

    answers: Array<{
        value: string,
        title: string,
        description: string
    }>

}

export type QuizType = Quiz['settings']['type'];

export type AnswerValue = Quiz['questions'][0]['answers'][0]['value'];

export type Result = Quiz['answers'][0];