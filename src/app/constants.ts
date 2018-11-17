import { QuizType, AppLanguage } from './types';

/* Available Quiz types */
export const PERSONALITY_QUIZ: QuizType = 'personalityQuiz';
export const TRUEORFALSE_QUIZ: QuizType = 'trueorfalseQuiz';
/* Language Maps */
export const APP_LANG_EN: AppLanguage = 'en';
export const APP_LANG_EN_TEST_VALUE = 'test-value-en' // Value used only for test purpose
export const APP_LANG_IT: AppLanguage  = 'it';
export const APP_LANG_IT_TEST_VALUE = 'test-value-it' // Value used only for test purpose
export const APP_LANG_DEFAULT: AppLanguage = APP_LANG_IT;
export const APP_LANG_DEFAULT_TEST_VALUE = APP_LANG_IT_TEST_VALUE // Value used only for test purpose
/* App info */
export const APP_TITLE = 'Quizzer';