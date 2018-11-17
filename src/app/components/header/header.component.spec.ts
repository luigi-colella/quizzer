/* Vendor imports */
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF, I18nSelectPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
/* App imports */
import { HeaderModule } from './header.module';
import { AppHeaderComponent } from './header.component';
import { AppLocalization } from '../../services/appLocalization.service';
import { APP_LANG_EN, APP_LANG_IT } from '../../constants';
import { TestUtils } from '../../test-utils';

describe('Header Component', () => {

    let testUtils: TestUtils<AppHeaderComponent>

    const DOMSelectors = {
        appTitle: 'h1',
        linkCreateQuiz: 'li a[href="/create"]',
        linkQuizList: 'li a[href="/list"]',
        linkLoadQuiz: 'li a[href="/launch"]',
        languageMenuButton: 'button[mat-button]',
        languageMenuItem: '.mat-menu-content button.mat-menu-item'
    }
    const mockLanguageMap = {
        en: {
            quizCreate: 'test-quizCreate-en',
            quizList: 'test-quizList-en',
            quizLoad: 'test-quizLoad-en'
        },
        it: {
            quizCreate: 'test-quizCreate-it',
            quizList: 'test-quizList-it',
            quizLoad: 'test-quizLoad-it'
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports:   [ HeaderModule, HttpClientModule ],
                providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
            })
            .compileComponents();
        // Create a fake method to fetch language files.
        spyOn(TestBed.get(AppLocalization), '_fetchLanguageMap').and.callFake(function(lang){
            if (lang === APP_LANG_EN) return of(mockLanguageMap.en);
            if (lang === APP_LANG_IT) return of(mockLanguageMap.it);
        });
        let fixture = TestBed.createComponent(AppHeaderComponent);
        testUtils = new TestUtils(fixture);
    })

    it('should exists', () => {
        expect(testUtils.getInstance()).toBeDefined();
    })

    it('should have title', () => {
        let expectedTitle = testUtils.getInstance().title;
        let currentTitle = testUtils.dom.getElementText(DOMSelectors.appTitle);
        expect(expectedTitle).toBeTruthy();
        expect(currentTitle).toBe(expectedTitle);
    })

    it('should have links', () => {
        let buttonQuizCreate = testUtils.dom.getElementText(DOMSelectors.linkCreateQuiz);
        let buttonQuizList = testUtils.dom.getElementText(DOMSelectors.linkQuizList);
        let buttonQuizLoad = testUtils.dom.getElementText(DOMSelectors.linkLoadQuiz);
        expect(buttonQuizCreate).toBe(testUtils.getInstance().langMap.quizCreate);
        expect(buttonQuizList).toBe(testUtils.getInstance().langMap.quizList);
        expect(buttonQuizLoad).toBe(testUtils.getInstance().langMap.quizLoad);
    })

    it('should changes the language', () => {
        // Function to get text of quiz create button
        let getBtnQuizCreateText = () => testUtils.dom.getElementText(DOMSelectors.linkCreateQuiz);
        // Set the english language
        testUtils.dom.click(DOMSelectors.languageMenuButton);
        testUtils.dom.click(DOMSelectors.languageMenuItem, 0);
        expect(getBtnQuizCreateText()).toBe(mockLanguageMap.en.quizCreate);
        // Set the italian language
        testUtils.dom.click(DOMSelectors.languageMenuButton);
        testUtils.dom.click(DOMSelectors.languageMenuItem, 1);
        expect(getBtnQuizCreateText()).toBe(mockLanguageMap.it.quizCreate);
    })

})