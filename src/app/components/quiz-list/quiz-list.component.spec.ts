/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
/* App imports */
import { QuizListModule } from './quiz-list.module';
import { QuizListComponent } from './quiz-list.component';
import { QuizDatabase } from '../../services/quizDatabase.service';
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';
import { TestUtils as BaseTestUtils } from '../../test-utils';

describe('QuizList Component', () => {

    let testUtils: TestUtils<QuizListComponent>;
    let quizDatabase: QuizDatabase;

    const DOMSelectors = {
        quizItem: '.quiz-item mat-card',
        quizItemTitle: '.quiz-item mat-card mat-card-title',
        quizItemSubtitle: '.quiz-item mat-card mat-card-subtitle',
        quizItemImage: '.quiz-item mat-card img[mat-card-image]',
        quizItemDescription: '.quiz-item mat-card mat-card-content p'
    };

    class TestUtils<QuizListComponent> extends BaseTestUtils<QuizListComponent> {
        /**
         * Mock the function `getAll` of the database service in order to get the mockData as function's return value
         * @param {Object} mockData
         */
        mockGetAll (mockData) {
            spyOn(quizDatabase, 'getAll').and.returnValue(of(mockData));
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [ QuizListModule, RouterModule.forRoot([]) ],
                providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
            })
            .compileComponents();
        
        let componentFixture = TestBed.createComponent(QuizListComponent);
        quizDatabase = TestBed.get(QuizDatabase);
        testUtils = new TestUtils(componentFixture);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should fetch all quizzes', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        testUtils.getInstance().fetchAllQuizzes();
        expect(quizDatabase.getAll).toHaveBeenCalled();
        expect(testUtils.getInstance().quizzes).toBe(mockData);
    })

    it('should show all quizzes', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        testUtils.getInstance().fetchAllQuizzes();
        testUtils.detectChanges();
        let quizItemsNumber = testUtils.dom.getElementsNumber(DOMSelectors.quizItem);
        expect(quizItemsNumber).toBe(mockData.length);
    })

    it('should show right info of a quiz', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        testUtils.getInstance().fetchAllQuizzes();
        testUtils.detectChanges();
        // Check title
        let quizTitle = mockQuiz.settings.title;
        let domQuizTitle = testUtils.dom.getElementText(DOMSelectors.quizItemTitle);
        expect(domQuizTitle).toBe(quizTitle);
        // Check type
        let quizType = testUtils.getInstance().quizTypes[mockQuiz.settings.type];
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
