/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizRunnerModule } from './quiz-runner.module'
import { QuizRunnerComponent } from './quiz-runner.component';
import { Quiz } from '../../types';
import { TestUtils as BaseTestUtils } from '../../test-utils';
import { of } from 'rxjs';
import { LanguageMap } from '../../langMapType';
import { AppLocalization } from '../../services/appLocalization.service';
import { APP_LANG_IT, APP_LANG_DEFAULT } from '../../constants';

describe('QuizRunner Component', () => {

    let testUtils: TestUtils<QuizRunnerComponent>;
    let httpService: HttpClient
    let localizationService: AppLocalization

    const DOMSelectors = {
        'title': 'h1',
        'quizDescription': 'p',
        'coverImage': '.intro .thumbnail img',
        'actionButton': '.buttons button:nth-child(2)',
        'radioInputs': 'mat-radio-button input[type="radio"]',
        'firstRadioInput': 'mat-radio-button:first-child input[type="radio"]',
        'resultTitle': '#resultQuiz h2',
        'resultDescription': '#resultQuiz p',
        'resultImage': '.result .thumbnail:not(.hidden) img'
    }
    class TestUtils<QuizRunnerComponentz> extends BaseTestUtils<QuizRunnerComponent> {

        answerToAllQuestions () {
            //Click submit button to start the test
            this.dom.click(DOMSelectors.actionButton);
            //Get questions number...
            let qNum = this.getInstance().curQuiz.questions.length;
            //...and loop for each
            for (let i = 0; i < qNum; i++){
                //Select first choice
                this.dom.click(DOMSelectors.firstRadioInput);
                this.dom.click(DOMSelectors.actionButton);
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

        let fixture = TestBed.createComponent(QuizRunnerComponent);
        testUtils = new TestUtils(fixture);
        httpService = TestBed.get(HttpClient);
        localizationService = TestBed.get(AppLocalization);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should changes language map', () => {
        let mockLanguageMap = { startQuiz: testUtils.getRandomValue() } as LanguageMap
        spyOn(httpService, 'get').and.returnValue(of(mockLanguageMap));
        localizationService.setLanguage(APP_LANG_DEFAULT);
        testUtils.detectChanges();        
        let actionButtonText = testUtils.dom.getElementText(DOMSelectors.actionButton);
        expect(actionButtonText).toContain(mockLanguageMap.startQuiz);
    })

    it('should have the quiz title', () => {
        let expectedTitle = testUtils.getInstance().curQuiz.settings.title;
        let title = testUtils.dom.getElementText(DOMSelectors.title);
        expect(title).toEqual(expectedTitle);
    })

    it('should have the quiz intro', () => {
        let expectedIntro = testUtils.getInstance().curQuiz.settings.description;
        let intro = testUtils.dom.getElementText(DOMSelectors.quizDescription);
        expect(intro).toEqual(expectedIntro);
    })

    it('should have the quiz cover image', () => {
        let imgUrl = testUtils.getInstance().curQuiz.settings.imageUrl;
        let imgDOMElementSrc = testUtils.dom.getElementAttribute(DOMSelectors.coverImage, 'src');
        expect(imgDOMElementSrc).toBe(imgUrl);
    })

    it('should have a button to start the test', () => {
        let actionButton = testUtils.dom.getElementsNumber(DOMSelectors.actionButton);
        expect(actionButton).toEqual(1)
    })

    it('should starts the test', () => {
        testUtils.dom.click(DOMSelectors.actionButton);
        let radioInputsNumber = testUtils.dom.getElementsNumber(DOMSelectors.radioInputs);
        let firstQuestionAnswersNumber = testUtils.getInstance().curQuiz.questions[0].answers.length;
        expect(radioInputsNumber).toEqual(firstQuestionAnswersNumber);
    })

    it('should be able to submit current view if press Enter key', () => {
        spyOn(testUtils.getInstance(), 'onSubmit');
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        testUtils.detectChanges();
        expect(testUtils.getInstance().onSubmit).toHaveBeenCalledTimes(1);
    })

    it('should finish the quiz after answering all questions', () => {
        testUtils.answerToAllQuestions();
        let radioInputsNumber = testUtils.dom.getElementsNumber(DOMSelectors.radioInputs);
        //If there will not be another choices, test is passed
        expect(radioInputsNumber).toEqual(0)

    });

    it('should have result message at the end of quiz', () => {
        testUtils.answerToAllQuestions();
        let resultTitle = testUtils.getInstance().curQuizResult.title;
        let resultDescription = testUtils.getInstance().curQuizResult.description;
        let domResultTitle = testUtils.dom.getElementText(DOMSelectors.resultTitle);
        let domResultDescription = testUtils.dom.getElementText(DOMSelectors.resultDescription);
        expect(domResultTitle).toEqual(resultTitle);
        expect(domResultDescription).toEqual(resultDescription);
    })

    it('should have result image', () => {
        testUtils.answerToAllQuestions();
        let imgURL = testUtils.getInstance().curQuizResult.imageUrl;
        let imgDOMElementSrc = testUtils.dom.getElementAttribute(DOMSelectors.resultImage, 'src');
        expect(imgDOMElementSrc).toBe(imgURL);
    })

    it('should repeat the quiz after having finished it', () => {
        testUtils.answerToAllQuestions();
        testUtils.dom.click(DOMSelectors.actionButton);
        // Check quiz title
        let expectedTitle = testUtils.getInstance().curQuiz.settings.title;
        let title = testUtils.dom.getElementText(DOMSelectors.title);
        expect(title).toEqual(expectedTitle);
        // Check quiz intro
        let expectedIntro = testUtils.getInstance().curQuiz.settings.description;
        let intro = testUtils.dom.getElementText(DOMSelectors.quizDescription);
        expect(intro).toEqual(expectedIntro);
    })

});