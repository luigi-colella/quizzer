/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizRunnerModule } from './quiz-runner.module'
import { QuizRunnerComponent } from './quiz-runner.component';
import { Quiz } from '../../types';

describe('QuizRunner Component', () => {

    let fixture: ComponentFixture<QuizRunnerComponent>;
    let compDebug: DebugElement;
    let compIstance: DebugElement['componentInstance'];
    let compHTML: HTMLElement;

    let DOMSelectors = {
        'title': 'h1',
        'quizDescription': 'p',
        'coverImage': '.intro .thumbnail img',
        'actionButton': '.buttons button:nth-child(2)',
        'radioInputs': 'mat-radio-button',
        'firstRadioInput': 'mat-radio-button:first-child',
        'resultTitle': '#resultQuiz h2',
        'resultDescription': '#resultQuiz p',
        'resultImage': '.result .thumbnail:not(.hidden) img'
    }
    let testUtils = {
        normalize: (value: string): string => {
            return value.trim().toLowerCase();
        },
        getCurQuiz: (): Quiz => {
            return compIstance.curQuiz;
        },
        getElementText: (selectorCSS: string): string => {
            return compHTML.querySelector(selectorCSS).textContent;
        },
        getElementsNumber: (selectorCSS: string): number => {
            return compHTML.querySelectorAll(selectorCSS).length;
        },
        click: (selectorCSS: string) => {
            (compHTML.querySelector(selectorCSS) as HTMLInputElement).click();
            fixture.detectChanges();
        },
        answerToAllQuestions: () => {
            //Click submit button to start the test
            testUtils.click(DOMSelectors.actionButton);
            //Get questions number...
            let qNum = compIstance.curQuiz.questions.length;
            //...and loop for each
            for (let i = 0; i < qNum; i++){
                //Select first choice
                testUtils.click(DOMSelectors.firstRadioInput);
                testUtils.click(DOMSelectors.actionButton);
            }
        }
    }

    beforeEach(() => {
        TestBed
        .configureTestingModule({
            imports: [ 
                RouterModule.forRoot([]),
                QuizRunnerModule,
                MaterialModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
        .compileComponents()

        fixture = TestBed.createComponent(QuizRunnerComponent);
        fixture.detectChanges();
        compDebug = fixture.debugElement;
        compIstance = compDebug.componentInstance;
        compHTML = compDebug.nativeElement
    })

    it('should exists', () => {
        expect(compIstance).toBeDefined();
    })

    it('should have the quiz title', () => {
        let expectedTitle = compIstance.curQuiz.settings.title;
        let title = testUtils.getElementText(DOMSelectors.title);
        expect(title).toEqual(expectedTitle);
    })

    it('should have the quiz intro', () => {
        let expectedIntro = compIstance.curQuiz.settings.description;
        let intro = testUtils.getElementText(DOMSelectors.quizDescription);
        expect(
            testUtils.normalize(intro)
        ).toEqual(
            testUtils.normalize(expectedIntro)
        );
    })

    it('should have the quiz cover image', () => {
        let imgUrl = testUtils.getCurQuiz().settings.imageUrl;
        let imgDOMElement = compHTML.querySelector(DOMSelectors.coverImage) as HTMLImageElement;
        expect(imgDOMElement.src).toBe(imgUrl);
    })

    it('should have a button to start the test', () => {
        expect(
            testUtils.getElementsNumber(DOMSelectors.actionButton)
        ).toEqual(1)
    })

    it('should starts the test', () => {
        testUtils.click(DOMSelectors.actionButton);
        expect(
            testUtils.getElementsNumber(DOMSelectors.radioInputs)
        ).toEqual(
            compIstance.curQuiz.questions[0].answers.length
        )
    })

    it('should be able to submit current view if press Enter key', () => {
        spyOn(compIstance, 'onSubmit');
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        fixture.detectChanges();
        expect(compIstance.onSubmit).toHaveBeenCalledTimes(1);
    })

    it('should finish the quiz after answering all questions', () => {
        testUtils.answerToAllQuestions();
        //If there will not be another choices, test is passed
        expect(
            testUtils.getElementsNumber(DOMSelectors.radioInputs)
        ).toEqual(0)

    });

    it('should have result message', () => {
        testUtils.answerToAllQuestions();
        let expectedResultTitle = compIstance.curQuizResult.title;
        let expectedResultDescription = compIstance.curQuizResult.description;
        expect(
            testUtils.normalize(testUtils.getElementText(DOMSelectors.resultTitle))
        ).toEqual(
            testUtils.normalize(expectedResultTitle)
        ) && expect(
            testUtils.normalize(testUtils.getElementText(DOMSelectors.resultDescription))
        ).toEqual(
            testUtils.normalize(expectedResultDescription)
        )
    })

    it('should have result image', () => {
        testUtils.answerToAllQuestions();
        let imgURL = compIstance.curQuizResult.imageUrl;
        let imgDOMElement = compHTML.querySelector(DOMSelectors.resultImage) as HTMLImageElement;
        expect(imgDOMElement.src).toBe(imgURL);
    })

    it('should repeat the quiz after having finished it', () => {
        testUtils.answerToAllQuestions();
        testUtils.click(DOMSelectors.actionButton);
        // Check quiz title
        let expectedTitle = compIstance.curQuiz.settings.title;
        let title = testUtils.getElementText(DOMSelectors.title);
        expect(title).toEqual(expectedTitle);
        // Check quiz intro
        let expectedIntro = compIstance.curQuiz.settings.description;
        let intro = testUtils.getElementText(DOMSelectors.quizDescription);
        expect(
            testUtils.normalize(intro)
        ).toEqual(
            testUtils.normalize(expectedIntro)
        );
    })

});