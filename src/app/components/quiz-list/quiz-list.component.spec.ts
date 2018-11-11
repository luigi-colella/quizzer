/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
/* App imports */
import { QuizListModule } from './quiz-list.module';
import { QuizListComponent } from './quiz-list.component';
import { QuizDatabase } from '../../services/quizDatabase.service';
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

describe('QuizList Component', () => {

    let componentFixture: ComponentFixture<QuizListComponent>
    let componentInstance: QuizListComponent;
    let componentHTML: HTMLDocument;
    let quizDatabase: QuizDatabase;

    const DOMSelectors = {
        quizItem: '.quiz-item mat-card',
        quizItemTitle: '.quiz-item mat-card mat-card-title',
        quizItemSubtitle: '.quiz-item mat-card mat-card-subtitle',
        quizItemImage: '.quiz-item mat-card img[mat-card-image]',
        quizItemDescription: '.quiz-item mat-card mat-card-content p'
    }

    const testUtils = {
        /**
         * Mock the function `getAll` of the database service in order to get the mockData as function's return value
         * @param {Object} mockData
         */
        mockGetAll: (mockData) => {
            spyOn(quizDatabase, 'getAll').and.callFake(() => {
                return Observable.create((observer) => {
                    observer.next(mockData)
                })
            });
        },
        /**
         * Get text of a DOM Element
         * @param {string} selector CSS selector of element.
         * @param {number} [index] index of the element. Default 0.
         * @return {string} text of the element.
         */
        getElementText: (selector: string, index = 0): string => {
            return (componentHTML.querySelectorAll(selector)[index] as HTMLElement).textContent;
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [ QuizListModule, RouterModule.forRoot([]) ],
                providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
            })
            .compileComponents();
        
        componentFixture = TestBed.createComponent(QuizListComponent);
        componentInstance = componentFixture.debugElement.componentInstance;
        componentHTML = componentFixture.debugElement.nativeElement;
        quizDatabase = TestBed.get(QuizDatabase);
        componentFixture.detectChanges();
    })

    it('should exists', () => {
        expect(componentInstance).toBeDefined();
    })

    it('should fetch all quizzes', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        componentInstance.fetchAllQuizzes();
        expect(quizDatabase.getAll).toHaveBeenCalled();
        expect(componentInstance.quizzes).toBe(mockData);
    })

    it('should show all quizzes', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        componentInstance.fetchAllQuizzes();
        componentFixture.detectChanges();
        let quizItemsNumber = componentHTML.querySelectorAll(DOMSelectors.quizItem).length;
        expect(quizItemsNumber).toBe(mockData.length);
    })

    it('should show right info of a quiz', () => {
        const mockData = [mockQuiz, mockQuiz];
        testUtils.mockGetAll(mockData);
        componentInstance.fetchAllQuizzes();
        componentFixture.detectChanges();
        // Check title
        let quizTitle = testUtils.getElementText(DOMSelectors.quizItemTitle);
        expect(quizTitle).toBe(mockQuiz.settings.title);
        // Check type
        let quizType = testUtils.getElementText(DOMSelectors.quizItemSubtitle);
        expect(quizType).toBe(componentInstance.quizTypes[mockQuiz.settings.type]);
        // Check image
        let quizImage = (componentHTML.querySelector(DOMSelectors.quizItemImage) as HTMLImageElement).src;
        expect(quizImage).toBe(mockQuiz.settings.imageUrl);
        // Check description
        let quizDescription = testUtils.getElementText(DOMSelectors.quizItemDescription);
        expect(quizDescription).toBe(mockQuiz.settings.description);
    })

})
