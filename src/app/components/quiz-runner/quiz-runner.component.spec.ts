/* Vendor imports */
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../../modules/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/* App imports */
import { QuizRunnerModule } from './quiz-runner.module'
import { QuizRunnerComponent } from './quiz-runner.component';
import { Quiz } from '../../types';
import { TestUtils as BaseTestUtils } from '../../test-utils';
import { of } from 'rxjs';
import { LanguageMap } from '../../langMapType';
import { AppLocalization } from '../../services/appLocalization.service';
import { QuizDatabase } from '../../services/quizDatabase.service';
import { QuizHandler } from '../../services/quizHandler.service';
import { APP_LANG_IT, APP_LANG_DEFAULT } from '../../constants';
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

describe('QuizRunner Component', () => {

    let testUtils: TestUtils<QuizRunnerComponent>
    let httpService: HttpClient
    let localizationService: AppLocalization
    let dbService: QuizDatabase
    let quizHandlerService: QuizHandler

    const DOMSelectors = {
        title: 'h1',
        boot: {
            options: '.boot.buttons .action',
            optionsLabels: '.boot.buttons .action p',
            optionRandom: '.boot.buttons .action:nth-child(2) button',
            optionUpload: '.boot.buttons .action:nth-child(3) input[type="file"]'
        },
        start: {
            quizDescription: '.intro p',
            coverImage: '.intro .thumbnail img'
        },
        run: {
            radioInputs: 'mat-radio-button input[type="radio"]',
            'firstRadioInput': 'mat-radio-button:first-child input[type="radio"]'
        },
        finish: {
            title: '#quiz-result h2',
            description: '#quiz-result p',
            image: '.result-thumbnail:not(.hidden) img'
        },
        footer: {
            optionChoose: '.footer .buttons button:nth-child(1)',
            optionSubmit: '.footer .buttons button:nth-child(2)'
        }
    }
    class TestUtils<QuizRunnerComponentz> extends BaseTestUtils<QuizRunnerComponent> {

        loadQuiz (quiz = mockQuiz) {
            this.getInstance().loadQuiz(mockQuiz);
            this.detectChanges();
            return {
                and: {
                    answerToAllQuestions: this.answerToAllQuestions.bind(this)
                }
            }
        }

        answerToAllQuestions () {
            //Click submit button to start the test
            this.dom.click(DOMSelectors.footer.optionSubmit);
            //Get questions number...
            let qNum = this.getInstance().curQuiz.questions.length;
            //...and loop for each
            for (let i = 0; i < qNum; i++){
                //Select a random answer
                let answersNumber = this.getInstance().curQuiz.questions[i].answers.length;
                let randomIndex = ~~(Math.random() * answersNumber)
                this.dom.click(DOMSelectors.run.radioInputs, randomIndex);
                this.dom.click(DOMSelectors.footer.optionSubmit);
            }
        }
    }

    beforeEach(() => {
        TestBed
        .configureTestingModule({
            imports: [ 
                RouterModule.forRoot([]),
                QuizRunnerModule,
                MaterialModule,
                NoopAnimationsModule
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
        dbService = TestBed.get(QuizDatabase);
        quizHandlerService = TestBed.get(QuizHandler);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should changes language map', () => {
        let mockLanguageMap = { randomQuiz: testUtils.getRandomValue() } as LanguageMap
        spyOn(httpService, 'get').and.returnValue(of(mockLanguageMap));
        localizationService.setLanguage(APP_LANG_DEFAULT);
        testUtils.detectChanges();
        let actionButtonText = testUtils.dom.getElementText(DOMSelectors.boot.optionRandom);
        expect(actionButtonText).toContain(mockLanguageMap.randomQuiz);
    })

    it('should show 3 options to start a new quiz', () => {
        let optionsNumber = testUtils.dom.getElementsNumber(DOMSelectors.boot.options);
        expect(optionsNumber).toBe(3);
        let optionsLabelsNumber = testUtils.dom.getElementsNumber(DOMSelectors.boot.optionsLabels);
        expect(optionsLabelsNumber).toBe(3);
    })

    it('should choose a random quiz', () => {
        spyOn(dbService, 'getRandom').and.returnValue(of(mockQuiz));
        testUtils.dom.click(DOMSelectors.boot.optionRandom);
        expect(testUtils.getInstance().curQuiz).toBe(mockQuiz);
    })

    it('should upload a quiz', () => {
        spyOn(window, 'FileReader' as any).and.returnValue({
            readAsDataURL: function(file) {
                this.onload({ target: { result: file } })
            }
        });
        spyOn(quizHandlerService, 'decode').and.callFake((quizObject) => quizObject);
        let fakeEvent = { target: { files: [mockQuiz] } };
        testUtils.getInstance().uploadQuiz(fakeEvent as any);
        expect(testUtils.getInstance().curQuiz).toBe(mockQuiz);
    })

    it('should have the quiz title', async () => {
        testUtils.loadQuiz();
        let expectedTitle = testUtils.getInstance().curQuiz.settings.title;
        let title = testUtils.dom.getElementText(DOMSelectors.title, 1);
        expect(title).toEqual(expectedTitle);
    })

    it('should have the quiz intro', () => {
        testUtils.loadQuiz();
        let expectedIntro = testUtils.getInstance().curQuiz.settings.description;
        let intro = testUtils.dom.getElementText(DOMSelectors.start.quizDescription);
        expect(intro).toEqual(expectedIntro);
    })

    it('should have the quiz cover image', () => {
        testUtils.loadQuiz();
        let imgUrl = testUtils.getInstance().curQuiz.settings.imageUrl;
        let imgDOMElementSrc = testUtils.dom.getElementAttribute(DOMSelectors.start.coverImage, 'src');
        expect(imgDOMElementSrc).toBe(imgUrl);
    })

    it('should have a button to return to boot', () => {
        testUtils.loadQuiz();
        // Check button when quiz is started
        testUtils.dom.click(DOMSelectors.footer.optionChoose);
        let bootButtonsNumber = testUtils.dom.getElementsNumber(DOMSelectors.boot.options);
        expect(bootButtonsNumber).toBe(3);
    })

    it('should have a button to start the test', () => {
        testUtils.loadQuiz();
        let actionButton = testUtils.dom.getElementsNumber(DOMSelectors.footer.optionSubmit);
        expect(actionButton).toEqual(1)
    })

    it('should starts the test', () => {
        testUtils.loadQuiz();
        testUtils.dom.click(DOMSelectors.footer.optionSubmit);
        let radioInputsNumber = testUtils.dom.getElementsNumber(DOMSelectors.run.radioInputs);
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
        testUtils.loadQuiz().and.answerToAllQuestions();
        let radioInputsNumber = testUtils.dom.getElementsNumber(DOMSelectors.run.radioInputs);
        //If there will not be another choices, test is passed
        expect(radioInputsNumber).toEqual(0)

    });

    it('should have result message at the end of quiz', () => {
        testUtils.loadQuiz().and.answerToAllQuestions();
        let resultTitle = testUtils.getInstance().curQuizResult.title;
        let resultDescription = testUtils.getInstance().curQuizResult.description;
        let domResultTitle = testUtils.dom.getElementText(DOMSelectors.finish.title);
        let domResultDescription = testUtils.dom.getElementText(DOMSelectors.finish.description);
        expect(domResultTitle).toEqual(resultTitle);
        expect(domResultDescription).toEqual(resultDescription);
    })

    it('should have result image', () => {
        testUtils.loadQuiz().and.answerToAllQuestions();
        let imgURL = testUtils.getInstance().curQuizResult.imageUrl;
        let imgDOMElementSrc = testUtils.dom.getElementAttribute(DOMSelectors.finish.image, 'src');
        expect(imgDOMElementSrc).toBe(imgURL);
    })

    it('should repeat the quiz after having finished it', () => {
        testUtils.loadQuiz().and.answerToAllQuestions();
        testUtils.dom.click(DOMSelectors.footer.optionSubmit);
        // Check quiz title
        let expectedTitle = testUtils.getInstance().curQuiz.settings.title;
        let title = testUtils.dom.getElementText(DOMSelectors.title, 1);
        expect(title).toEqual(expectedTitle);
        // Check quiz intro
        let expectedIntro = testUtils.getInstance().curQuiz.settings.description;
        let intro = testUtils.dom.getElementText(DOMSelectors.start.quizDescription);
        expect(intro).toEqual(expectedIntro);
    })

});