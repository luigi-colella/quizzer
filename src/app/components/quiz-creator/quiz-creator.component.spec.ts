/* Vendor imports */
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../modules/material.module';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormArray } from '@angular/forms';
/* App imports */
import { QuizCreatorModule } from './quiz-creator.module';
import { QuizCreatorComponent } from './quiz-creator.component';
import { Quiz, QuizType } from '../../types';
import { PERSONALITY_QUIZ, TRUEORFALSE_QUIZ } from '../../constants';
import { TestUtils as BaseTestUtils } from '../../test-utils';


describe('QuizCreator Component', () => {

    let testUtils: TestUtils<QuizCreatorComponent>

    const DOMSelectors = {
        stepContent: '.mat-vertical-stepper-content[aria-expanded="true"]',
        nextButton: 'button[matStepperNext]',
        beforeButton: 'button[matStepperPrevious]',
        settingsForm: {
            title: 'input[matInput][formControlName="title"]',
            type: 'mat-select[formcontrolname="type"]',
            description: 'textarea[matinput][formcontrolname="description"]',
            imageUrl: 'input[matInput][formcontrolname="imageUrl"]'
        },
        dialog: {
            textInput: 'mat-dialog-container input[matInput]'
        },
        questionForm: {
            addButton: '[formarrayname="questions"] .buttons button:first-child',
            expandAllButton: '[formarrayname="questions"] .buttons button:nth-child(2)',
            collapseAllButton: '[formarrayname="questions"] .buttons button:nth-child(3)',
            questionTextInput: '[formarrayname="questions"] .mat-expansion-panel-body > div > mat-form-field [matinput][formcontrolname="text"]',
            removeButton: '[formarrayname="questions"] mat-expansion-panel-header .panel-description-buttons button:nth-child(1)',
            expandedAnswersList: '[formarrayname="questions"] mat-expansion-panel.mat-expanded .question-answer-box',
            addAnswer: '[formarrayname="questions"] mat-panel-description .panel-description-buttons button:nth-child(2)',
            removeAnswer: '[formarrayname="questions"] .question-answer-box button:nth-child(3)',
            answerTextInput: '[formarrayname="questions"] .question-answer-box mat-form-field:nth-child(1) [matInput]',
            answerValueRadioInput: '[formarrayname="questions"] .question-answer-box mat-radio-group mat-radio-button input[type="radio"]',
            answerValueSelect: '[formarrayname="questions"] .question-answer-box mat-select',
            noSelectedQuizTypeWarning: '[formarrayname="questions"] .question-answer-box .notype-warning'
        },
        answerForm: {
            addButton: '[formarrayname="answers"] .buttons button:first-child',
            removeButton: '[formarrayname="answers"] mat-accordion button',
            titleInput: '[formarrayname="answers"] [formcontrolname="title"]',
            valueInput: '[formarrayname="answers"] [formcontrolname="value"]',
            answerValueSelect: '[formarrayname="answers"] mat-select',
            descriptionInput: '[formarrayname="answers"] [formcontrolname="description"]',
            imageUrl: '[formarrayname="answers"] [formControlName="imageUrl"]'
        }
    };
    
    class TestUtils<QuizCreatorComponent> extends BaseTestUtils<QuizCreatorComponent> {
        /**
         * Get created quiz object.
         * @returns {Object} quiz object value.
         */
        getQuizObj (): Quiz {
            return this.getInstance()['quiz']['value'];
        };
        /**
         * Navigate between form tabs.
         * @param {string} direction Value to determine whether to go to the previous or next tab.
         */
        navigateTab (direction: 'previous' | 'next') {
            if (direction === 'previous') {
                this.dom.click(DOMSelectors.beforeButton);
                this.detectChanges();
            };
            if (direction === 'next') {
                this.dom.click(DOMSelectors.nextButton);
                this.detectChanges();
            };
        };
        /**
         * Fill an input with provided value.
         * @param {string} inputSelector CSS selector of input
         * @param {string} value value to set
         */
        fillInput (inputSelector: string, value: string) {
            let input = this.dom.getElement(inputSelector) as HTMLInputElement;
            if (!input) input = document.querySelector(inputSelector);
            if (!input) throw 'Element not found: ' + inputSelector
            input.focus();
            input.value = value;
            input.dispatchEvent(new Event('input'));
            this.detectChanges();
        };
        /**
         * Set an option of a select element.
         * @param {string} inputSelector CSS selector of select
         * @param {string} value option to set. The select element must have this option to set it.
         */
        selectOption (inputSelector: string, value: string) {
            let select: MatSelect = this.debug.getElement(inputSelector);
            select.options.find((el: MatOption) => el.value === value).select();
            this.detectChanges();
        };
        /**
         * Get a random string value or a random value from a provided range.
         * @param {Array} [values] range of values for result
         * @returns {string} a random value
         */
        getRandomValue (values?: Array<string>): string {
            let result: string;
            if (values && values.length) {
                result = values[ Math.floor(Math.random() * (values.length - 0)) ]
            } else {
                result = Math.random().toString();
            }
            return result;
        };
    }


    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [ QuizCreatorModule ]
            })
            .compileComponents();
        let fixture = TestBed.createComponent(QuizCreatorComponent);
        testUtils = new TestUtils(fixture);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should move back and forth between sections', () => {
        // Get current tab content
        let getCurrentSectionContent = () => testUtils.dom.getElementText(DOMSelectors.stepContent);
        let firstSection = getCurrentSectionContent();
        testUtils.navigateTab('next');
        // Check that new tab content is different from first one
        expect(firstSection).not.toBe(getCurrentSectionContent());
        testUtils.navigateTab('previous');
        // Check that tab content is the same of first one
        expect(firstSection).toBe(getCurrentSectionContent());
    })

    it('should let add quiz settings', () => {
        // Values with which fill inputs
        let quizValues = {
            title: testUtils.getRandomValue(),
            type: testUtils.getRandomValue([PERSONALITY_QUIZ, TRUEORFALSE_QUIZ]),
            description: testUtils.getRandomValue()
        }
        testUtils.fillInput(DOMSelectors.settingsForm.title, quizValues.title);
        testUtils.fillInput(DOMSelectors.settingsForm.description, quizValues.description);
        testUtils.selectOption(DOMSelectors.settingsForm.type, quizValues.type);
        // Check that quiz object is updated
        let quizSettings = testUtils.getQuizObj().settings;
        expect(quizSettings.title).toBe(quizValues.title);
        expect(quizSettings.type).toBe(quizValues.type);
        expect(quizSettings.description).toBe(quizValues.description);
    })

    it('should let add a valid image url as quiz cover', () => {
        let imageUrlForm = () => { return testUtils.getInstance().quiz.get('settings').get('imageUrl') as FormControl; };
        expect(imageUrlForm().valid).toBeTruthy(); // This field is optional so as default the related form shoudl be valid
        testUtils.fillInput(DOMSelectors.settingsForm.imageUrl, testUtils.getRandomValue());
        expect(imageUrlForm().valid).toBeFalsy();
        let validValue = testUtils.getRandomValue() + '.png';
        testUtils.fillInput(DOMSelectors.settingsForm.imageUrl, validValue);
        // Check that form is valid and that quiz object is updated
        let quizSettings = testUtils.getQuizObj().settings;
        expect(imageUrlForm().valid).toBeTruthy();
        expect(quizSettings.imageUrl).toBe(validValue);
    })

    it('should have only default types of avaible quiz', () => {
        let defaultTypes: Array<QuizType> = [PERSONALITY_QUIZ, TRUEORFALSE_QUIZ];
        // Get the values of options of the select element instance
        let select: MatSelect = testUtils.debug.getElement(DOMSelectors.settingsForm.type);
        let avaiblesTypes: Array<QuizType> = select.options.map((el: MatOption) => el.value);
        // Check that values of options are the default types
        avaiblesTypes.forEach(type => {
            expect(defaultTypes).toContain(type);
        });
    })

    it('should let add a new question', () => {
        let getQuestionsLength = (): number => testUtils.getQuizObj().questions.length;
        testUtils.navigateTab('next');
        // Check that quiz has 0 questions as default
        expect(getQuestionsLength()).toBe(0);
        // Add a new question and recheck
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        expect(getQuestionsLength()).toBe(1);
    })

    it('should let remove a question', () => {
        // Function to get questions length
        let getQuestionsLength = (): number => testUtils.getQuizObj().questions.length;
        // Go to questions' tab
        testUtils.navigateTab('next');
        // Add a new question and check quiz questions' length
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        expect(getQuestionsLength()).toBe(1);
        // Remove a question and recheck
        testUtils.dom.click(DOMSelectors.questionForm.removeButton);
        expect(getQuestionsLength()).toBe(0);
    })

    it('should expand and collapse all questions', () => {
        let isPanelExpanded = () => testUtils.dom.getElementsNumber(DOMSelectors.questionForm.expandedAnswersList);
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // When a question is added, its panel is collapsed as default
        expect(isPanelExpanded()).toBeFalsy();
        // Expand all questions
        testUtils.dom.click(DOMSelectors.questionForm.expandAllButton);
        expect(isPanelExpanded()).toBeTruthy();
        // Collapse all questions
        testUtils.dom.click(DOMSelectors.questionForm.collapseAllButton);
        expect(isPanelExpanded()).toBeFalsy();
    })

    it('should let fill questions text', () => {
        let randomValue = testUtils.getRandomValue();
        let getQuestionText = (): Quiz['questions'][0]['text'] => testUtils.getQuizObj().questions[0].text;
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // Fill input and check that quiz object has updated
        testUtils.fillInput(DOMSelectors.questionForm.questionTextInput, randomValue);
        expect(getQuestionText()).toBe(randomValue);
    })

    it('should let add a new answer to a question', () => {
        let getAnswersLength = (): number => testUtils.getQuizObj().questions[0].answers.length;
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // When question is added, it has an empty answer as default
        let defaultAnswersLength = getAnswersLength();
        expect(defaultAnswersLength).toBe(1);
        // Add a new answer to question and check that quiz object has updated
        testUtils.dom.click(DOMSelectors.questionForm.addAnswer);
        expect(getAnswersLength()).toBe(defaultAnswersLength + 1);
    })

    it('should let remove an answer of a question', () => {
        let getAnswersLength = (): number => testUtils.getQuizObj().questions[0].answers.length;
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // When question is added, it has an empty answer as default
        let defaultAnswersLength = getAnswersLength();
        expect(defaultAnswersLength).toBe(1);
        // Add a new answer to question and check that quiz object has updated
        testUtils.dom.click(DOMSelectors.questionForm.removeAnswer);
        expect(getAnswersLength()).toBe(defaultAnswersLength - 1);
    })

    it('should have a warning message if no quiz type is selected', () => {
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        expect(
            testUtils.dom.getElement(DOMSelectors.questionForm.noSelectedQuizTypeWarning)
        ).toBeTruthy();
    })

    it('should set right answer\'s options for the \'True or False\' type', () => {
        // Set type of quiz
        testUtils.selectOption(DOMSelectors.settingsForm.type, TRUEORFALSE_QUIZ);
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // Check that there are two radio buttons
        let radioButtonsNumber = testUtils.dom.getElementsNumber(DOMSelectors.questionForm.answerValueRadioInput);
        expect(radioButtonsNumber).toBe(2);
        // Select one of two options
        testUtils.dom.click(DOMSelectors.questionForm.answerValueRadioInput);
        // Check value of answer in the quiz, in this case it should be "true"
        expect(testUtils.getQuizObj().questions[0].answers[0].value).toBe(true);

    })

    it('should set right answer\'s input for the \'Personality\' type', async () => {
        // Set type of quiz
        testUtils.selectOption(DOMSelectors.settingsForm.type, PERSONALITY_QUIZ);
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        testUtils.dom.click(DOMSelectors.questionForm.expandAllButton);
        // Trigger modal opening and waiting for it
        let selectElementInstance = testUtils.debug.getElement(DOMSelectors.questionForm.answerValueSelect);
        selectElementInstance.options.last._element.nativeElement.click();
        await testUtils.whenRenderingDone();
        // Enter answer's value in modal and check quiz object
        let randomValue = testUtils.getRandomValue();
        testUtils.fillInput(DOMSelectors.dialog.textInput, randomValue);
        expect(testUtils.getQuizObj().questions[0].answers[0].value).toBe(randomValue);
        // After test remove modal input to avoid conflicts with other tests that use it
        document.querySelector(DOMSelectors.dialog.textInput).remove();
    })

    it('should let fill text of a question\'s answer', () => {
        let randomValue = testUtils.getRandomValue();
        let getAnswerText = (): Quiz['questions'][0]['answers'][0]['text'] => testUtils.getQuizObj().questions[0].answers[0].text;
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.questionForm.addButton);
        // Fill question and check that quiz object has updated
        testUtils.fillInput(DOMSelectors.questionForm.answerTextInput, randomValue);
        expect(getAnswerText()).toBe(randomValue);
    })

    it('should let add a new result to quiz', () => {
        let getResultsLength = (): number => testUtils.getQuizObj().answers.length;
        testUtils.navigateTab('next');
        testUtils.navigateTab('next');
        // Check current results length
        let defaultResultsLength = getResultsLength();
        expect(defaultResultsLength).toBe(0);
        // Add a new result and check that quiz object has updated
        testUtils.dom.click(DOMSelectors.answerForm.addButton);
        expect(getResultsLength()).toBe(defaultResultsLength + 1);
    })

    it('should let remove a result of quiz', () => {
        let getResultsLength = (): number => testUtils.getQuizObj().answers.length;
        testUtils.navigateTab('next');
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.answerForm.addButton);
        // Check current results length
        let defaultResultsLength = getResultsLength();
        expect(defaultResultsLength).toBe(1);
        // Remove a result and check that quiz object has updated
        testUtils.dom.click(DOMSelectors.answerForm.removeButton);
        expect(getResultsLength()).toBe(defaultResultsLength - 1);
    })

    it('should let fill a result for a \'True or False\' quiz', () => {
        // Values with which fill inputs
        let quizValues = {
            title: testUtils.getRandomValue(),
            value: testUtils.getRandomValue(),
            description: testUtils.getRandomValue()
        }
        testUtils.selectOption(DOMSelectors.settingsForm.type, TRUEORFALSE_QUIZ);
        testUtils.navigateTab('next');
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.answerForm.addButton);
        // Fill inputs and check that quiz object has updated
        testUtils.fillInput(DOMSelectors.answerForm.titleInput, quizValues.title);
        testUtils.fillInput(DOMSelectors.answerForm.valueInput, quizValues.value);
        testUtils.fillInput(DOMSelectors.answerForm.descriptionInput, quizValues.description);
        expect(testUtils.getQuizObj().answers[0].title).toBe(quizValues.title);
        expect(testUtils.getQuizObj().answers[0].value).toBe(quizValues.value);
        expect(testUtils.getQuizObj().answers[0].description).toBe(quizValues.description);
    })

    it('should let fill a result for a \'Personality\' quiz', async () => {
        // Values with which fill inputs
        let quizValues = {
            title: testUtils.getRandomValue(),
            value: testUtils.getRandomValue(),
            description: testUtils.getRandomValue()
        }
        testUtils.selectOption(DOMSelectors.settingsForm.type, PERSONALITY_QUIZ);
        testUtils.navigateTab('next');
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.answerForm.addButton);
        // Fill inputs
        testUtils.fillInput(DOMSelectors.answerForm.titleInput, quizValues.title);
        testUtils.fillInput(DOMSelectors.answerForm.descriptionInput, quizValues.description);
        // Trigger modal opening and waiting for it
        let selectElementInstance = testUtils.debug.getElement(DOMSelectors.answerForm.answerValueSelect);
        selectElementInstance.options.last._element.nativeElement.click();
        await testUtils.whenRenderingDone();
        // Enter result's value in the modal
        testUtils.fillInput(DOMSelectors.dialog.textInput, quizValues.value);
        // Check the quiz object
        expect(testUtils.getQuizObj().answers[0].title).toBe(quizValues.title);
        expect(testUtils.getQuizObj().answers[0].value).toBe(quizValues.value);
        expect(testUtils.getQuizObj().answers[0].description).toBe(quizValues.description);
        // After test remove modal input to avoid conflicts with other tests that use it
        document.querySelector(DOMSelectors.dialog.textInput).remove();
    })

    it('should let add a valid image url for a quiz result', () => {
        testUtils.navigateTab('next');
        testUtils.navigateTab('next');
        testUtils.dom.click(DOMSelectors.answerForm.addButton);
        let imageUrlForm = () => {
            let answers = testUtils.getInstance().quiz.get('answers') as FormArray
            return answers.at(0).get('imageUrl') as FormControl;
        };
        expect(imageUrlForm().valid).toBeTruthy(); // This field is optional so as default the related form shoudl be valid
        testUtils.fillInput(DOMSelectors.answerForm.imageUrl, testUtils.getRandomValue());
        expect(imageUrlForm().valid).toBeFalsy();
        let validValue = testUtils.getRandomValue() + '.png';
        testUtils.fillInput(DOMSelectors.answerForm.imageUrl, validValue);
        // Check that form is valid and that quiz object is updated
        expect(imageUrlForm().valid).toBeTruthy();
        expect(testUtils.getQuizObj().answers[0].imageUrl).toBe(validValue);
    })
})