import { LanguageMap } from './langMapType'

export class Quiz {

    settings: {
        title: string,
        description: string,
        type: 'personalityQuiz' | 'trueorfalseQuiz';
        imageUrl?: string
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
        description: string,
        imageUrl?: string
    }>

}

export type QuizType = Quiz['settings']['type'];

export type AnswerValue = Quiz['questions'][0]['answers'][0]['value'];

export type Result = Quiz['answers'][0];

export type AppLanguage = 'en' | 'it';
export type AppLanguageMap =  LanguageMap;
