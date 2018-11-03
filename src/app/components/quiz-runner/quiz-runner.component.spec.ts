/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizRunnerModule } from './quiz-runner.module'
import { QuizRunnerComponent } from './quiz-runner.component';

describe('QuizRunner Component', () => {

    let fixture: ComponentFixture<QuizRunnerComponent>;
    let compDebug: DebugElement;
    let compIstance: DebugElement['componentInstance'];
    let compHTML: HTMLElement;

    let DOMSelectors = {
        'title': 'h1',
        'quizDescription': 'p',
        'actionButton': '.buttons button:nth-child(2)',
        'radioInputs': 'mat-radio-button',
        'firstRadioInput': 'mat-radio-button:first-child',
        'resultTitle': '#resultQuiz h2',
        'resultDescription': '#resultQuiz p'
    }
    let testUtils = {
        normalize: (value: string): string => {
            return value.trim().toLowerCase();
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

    it('Component exists', () => {
        expect(compIstance).toBeDefined();
    })

    const displayRightTitle = () => {
        let expectedTitle = compIstance.curQuiz.settings.title;
        let title = testUtils.getElementText(DOMSelectors.title);
        expect(title).toEqual(expectedTitle);
    }

    const displayRightIntro = () => {
        let expectedIntro = compIstance.curQuiz.settings.description;
        let intro = testUtils.getElementText(DOMSelectors.quizDescription);
        expect(
            testUtils.normalize(intro)
        ).toEqual(
            testUtils.normalize(expectedIntro)
        );
    }

    it('QuizRunner display right title of quiz', () => {
        displayRightTitle();
    })

    it('QuizRunner display right intro of quiz', () => {
        displayRightIntro();
    })

    it('Display button to start the test', () => {
        expect(
            testUtils.getElementsNumber(DOMSelectors.actionButton)
        ).toEqual(1)
    })

    it('Button starts the test', () => {
        testUtils.click(DOMSelectors.actionButton);
        expect(
            testUtils.getElementsNumber(DOMSelectors.radioInputs)
        ).toEqual(
            compIstance.curQuiz.questions[0].answers.length
        )
    })

    const answerToAllQuestions = () => {
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

    it('Test finishes normally after answering all questions', () => {
        answerToAllQuestions();
        //If there will not be another choices, test is passed
        expect(
            testUtils.getElementsNumber(DOMSelectors.radioInputs)
        ).toEqual(0)

    });

    it('Display right result message', () => {
        answerToAllQuestions();
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

    it('After finishing the quiz, you can repeat it', () => {
        answerToAllQuestions();
        testUtils.click(DOMSelectors.actionButton);
        displayRightIntro();
        displayRightTitle();
    })

});