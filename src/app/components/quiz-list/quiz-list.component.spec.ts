/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
/* App imports */
import { QuizListModule } from './quiz-list.module';
import { QuizListComponent } from './quiz-list.component';
import { QuizDatabase } from '../../services/quizDatabase.service';
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';
import { TestUtils } from '../../test-utils';
import { AppLocalization } from '../../services/appLocalization.service';
import { LanguageMap } from '../../langMapType';
import { APP_LANG_DEFAULT } from '../../constants';

describe('QuizList Component', () => {

    let testUtils: TestUtils<QuizListComponent>;
    let quizDatabase: QuizDatabase;
    let httpService: HttpClient;
    let localizationService: AppLocalization;
    const mockData = [mockQuiz, mockQuiz];

    const DOMSelectors = {
        quizItem: '.quiz-item mat-card',
        quizItemTitle: '.quiz-item mat-card mat-card-title',
        quizItemSubtitle: '.quiz-item mat-card mat-card-subtitle',
        quizItemImage: '.quiz-item mat-card img[mat-card-image]',
        quizItemDescription: '.quiz-item mat-card mat-card-content p'
    };

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [ QuizListModule, RouterModule.forRoot([]) ],
                providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
            })
            .compileComponents();
        
        let fixture = TestBed.createComponent(QuizListComponent);
        quizDatabase = TestBed.get(QuizDatabase);
        spyOn(quizDatabase, 'getAll').and.returnValue(of(mockData));
        httpService = TestBed.get(HttpClient);
        localizationService = TestBed.get(AppLocalization);
        testUtils = new TestUtils(fixture);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should change language', () => {
        let mockLanguageMap = { testValue: testUtils.getRandomValue() } as LanguageMap;
        spyOn(httpService, 'get').and.returnValue(of(mockLanguageMap));
        localizationService.setLanguage(APP_LANG_DEFAULT);
        let currentLanguageMap = testUtils.getInstance().languageMap;
        expect(currentLanguageMap).toEqual(mockLanguageMap);
    })

    it('should fetch all quizzes', () => {
        testUtils.getInstance().fetchAllQuizzes();
        expect(quizDatabase.getAll).toHaveBeenCalled();
        expect(testUtils.getInstance().quizzes).toBe(mockData);
    })

    it('should show all quizzes', () => {
        testUtils.getInstance().fetchAllQuizzes();
        testUtils.detectChanges();
        let quizItemsNumber = testUtils.dom.getElementsNumber(DOMSelectors.quizItem);
        expect(quizItemsNumber).toBe(mockData.length);
    })

    it('should show right info of a quiz', () => {
        // Mock language map
        const mockLanguageMap = { "personalityQuiz": testUtils.getRandomValue() } as LanguageMap;
        spyOn(httpService, 'get').and.returnValue(of(mockLanguageMap));
        localizationService.setLanguage('it');
        testUtils.detectChanges();
        // Check title
        let quizTitle = mockQuiz.settings.title;
        let domQuizTitle = testUtils.dom.getElementText(DOMSelectors.quizItemTitle);
        expect(domQuizTitle).toBe(quizTitle);
        // Check type
        let quizType = testUtils.getInstance().languageMap[mockQuiz.settings.type];
        let domQuizType = testUtils.dom.getElementText(DOMSelectors.quizItemSubtitle);
        expect(domQuizType).toBe(quizType);
        // Check image
        let quizImage = mockQuiz.settings.imageUrl;
        let domQuizImage = testUtils.dom.getElementAttribute(DOMSelectors.quizItemImage, 'src');
        expect(domQuizImage).toBe(quizImage);
        // Check description
        let quizDescription = mockQuiz.settings.description;
        let domQuizDescription = testUtils.dom.getElementText(DOMSelectors.quizItemDescription);
        expect(domQuizDescription).toBe(quizDescription);
    })

})
