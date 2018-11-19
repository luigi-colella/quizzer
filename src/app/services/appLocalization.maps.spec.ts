/* Vendor imports */
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
/* App imports */
import { APP_LANG_IT, APP_LANG_EN, APP_LANG_ES } from "../constants";

describe('Language files', () => {

    let httpService: HttpClient;
    const mapKeys = [
        "testValue",
        /* Global */
        "personalityQuiz", "trueorfalseQuiz", "ok",
        /* Quiz header */
        "quizCreate", "quizList", "quizLoad", "language",
        /* Quiz creator */
        "nextButton", "previousButton", "expandButton", "collapseButton", "selectQuizTypeBeforeAlert", "saveButton",
        // Input errors
        "errorMissingInput", "errorInvalidInput", "errorInvalidQuizType", "errorInvalidTrueOrFalseValue", "errorImageUrl",
        // Settings section
        "settings", "inputTitleLabel", "inputTitleTooltip", "inputTypeLabel", "inputTypeTooltip", "inputDescriptionLabel",
        "inputDescriptionTooltip", "inputCoverUrlLabel", "inputCoverUrlTooltip",
        // Questions section
        "questions", "addQuestion", "deleteQuestion", "addAnswerForQuestion", "removeAnswerForQuestion",
        "inputQuestionTextLabel", "inputQuestionTextTooltip", "inputQuestionAnswerTextLabel", "inputQuestionAnswerTextTooltip",
        "inputQuestionAnswerValueLabel", "inputQuestionAnswerValueTooltip", "inputQuestionAnswerValueTrueOrFalseTooltip",
        "inputQuestionAnswerValueNew", "true", "false", "noQuestionsAlert", "youHave", "prepositionOn", "questionsToComplete",
        // Results section
        "results", "addResult", "removeResult", "inputResultTitleLabel", "inputResultTitleTooltip", "inputResultValueLabel",
        "inputResultValueTooltip", "inputResultValueNew", "inputResultValueTrueOrFalseTooltip", "inputResultDescriptionLabel",
        "inputResultDescriptionTooltip", "inputResultImageUrlLabel", "inputResultImageUrlTooltip", "noResultsAlert",
        "resultsToComplete",
        /* Quiz runner */
        "question", "loadQuiz", "startQuiz", "restartQuiz",
    ];
    const checkKeys = (mapLanguage) => {
        return new Promise((resolve) => {
            httpService.get('../../assets/i18n/' + mapLanguage +'.json').subscribe({
                next: map => {
                    expect(mapKeys.length).toBe(Object.keys(map).length);
                    for (let i = 0; i < mapKeys.length; i++) {
                        expect(map[mapKeys[i]]).toBeTruthy('key missing or invalid: ' + mapKeys[i]);
                    }
                    resolve();
                }
            });
        })
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:   [ HttpClientModule ],
            providers: [ HttpClient ]
        }).compileComponents();
        httpService = TestBed.get(HttpClient);
    });

    it('italian map should have all keys', () => {
        return checkKeys(APP_LANG_IT);
    });

    it('english map should have all keys', () => {
        return checkKeys(APP_LANG_EN);
    });

    it('spanish map should have all keys', () => {
        return checkKeys(APP_LANG_ES);
    })

})