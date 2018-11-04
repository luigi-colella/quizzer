/* App imports */
import { QuizHandler as serviceClass } from './quizHandler.service'
import { quizCulture as sampleTrueOrFalseQuiz } from '../mocks/quiz.culture';
import { quizMusic as samplePersonalityQuiz } from '../mocks/quiz.music';
import { Quiz } from '../types';

describe('QuizHandler Service', () => {

    let service: serviceClass = new serviceClass;
    let trueOrFalseQuiz: Quiz = sampleTrueOrFalseQuiz;
    let personalityQuiz: Quiz = samplePersonalityQuiz;

    it('should exists', () => {
        expect(service).toBeDefined();
    })

    it('should encode', () => {
        let encodedQuiz = service.encode(trueOrFalseQuiz);
        expect(encodedQuiz).toBeTruthy();
    })

    it('should decode', () => {
        let encodedQuiz = 'data:application/json;base64,eyJzZXR0aW5ncyI6eyJ0aXRsZSI6InNqZmxzaiIsImRlc2NyaXB0aW9uIjoiZGhzZmtqaHNrZiIsInR5cGUiOiJwZXJzb25hbGl0eVF1aXoifSwicXVlc3Rpb25zIjpbeyJ0ZXh0Ijoic2FkamthaGQiLCJhbnN3ZXJzIjpbeyJ0ZXh0IjoiaGpza2Zoc2siLCJ2YWx1ZSI6InNmc2tqZmhza2poZiJ9XX1dLCJhbnN3ZXJzIjpbeyJ2YWx1ZSI6InNmc2tqZmhza2poZiIsInRpdGxlIjoic2pma3NqZGZscyIsImRlc2NyaXB0aW9uIjoia2pma3NkaGZoc2sifV19'
        let decodedQuiz = service.decode(encodedQuiz);
        expect(decodedQuiz.settings.title).toBeTruthy();
        expect(decodedQuiz.settings.type).toBeTruthy();
        expect(decodedQuiz.settings.description).toBeTruthy();
        expect(decodedQuiz.questions.length).toBeTruthy();
        expect(decodedQuiz.answers.length).toBeTruthy();
    })

    it('should load and get the quiz', () => {
        service.load(trueOrFalseQuiz);
        expect(service.getQuizObject()).toEqual(trueOrFalseQuiz);
    })

    it('should get result from \'True or False\' Quiz', () => {
        let expectResult = trueOrFalseQuiz.answers.filter((answer) => answer.value === '3-4')[0];
        let answers = [true, false, true, false, true]
        service.load(trueOrFalseQuiz); // Load the quiz before getting the result
        let result = service.getResult(answers);
        expect(result).toEqual(expectResult);
    })

    it('should get result from \'Personality\' Quiz', () => {
        let expectResult = personalityQuiz.answers.filter((answer) => answer.value === 'rock')[0];
        let answers = ['rock', 'classica', 'rock', 'rap', 'rock'];
        service.load(personalityQuiz); // Load the quiz before getting the result
        let result = service.getResult(answers);
        expect(result).toEqual(expectResult);
    })

})