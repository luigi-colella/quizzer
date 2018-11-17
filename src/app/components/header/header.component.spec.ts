/* Vendor imports */
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF, I18nSelectPipe } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
/* App imports */
import { HeaderModule } from './header.module';
import { AppHeader } from './header.component';
import { AppLocalization } from '../../services/appLocalization.service';
import { APP_LANG_EN, APP_LANG_IT } from '../../constants';

describe('Header Component', () => {

    let component = AppHeader;
    let fixture: ComponentFixture<AppHeader>;
    let componentInstance: AppHeader;
    let componentHTML: HTMLDocument;
    const DOMSelectors = {
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
                imports: [ HeaderModule, HttpClientModule ],
                providers: [
                    { provide: APP_BASE_HREF, useValue: '/' },
                ]
            })
            .compileComponents();
        // Create a fake method to fetch language files.
        spyOn(TestBed.get(AppLocalization), '_fetchLanguageMap').and.callFake(function(lang){
            if (lang === APP_LANG_EN) return of(mockLanguageMap.en);
            if (lang === APP_LANG_IT) return of(mockLanguageMap.it);
        });
        fixture = TestBed.createComponent(component);
        fixture.autoDetectChanges();
        componentInstance = fixture.debugElement.componentInstance;
        componentHTML = fixture.debugElement.nativeElement;

    })

    it('should exists', () => {
        expect(componentInstance).toBeDefined();
    })

    it('should have title', () => {
        let expectedTitle = componentInstance.title;
        let currentTitle = componentHTML.querySelector('h1').innerText;
        expect(expectedTitle).toBeTruthy();
        expect(currentTitle).toBe(expectedTitle);
    })

    it('should have links', () => {
        let buttonQuizCreate = componentHTML.querySelector(DOMSelectors.linkCreateQuiz).textContent;
        let buttonQuizList = componentHTML.querySelector(DOMSelectors.linkQuizList).textContent;
        let buttonQuizLoad = componentHTML.querySelector(DOMSelectors.linkLoadQuiz).textContent;
        expect(buttonQuizCreate).toBe(componentInstance.langMap.quizCreate);
        expect(buttonQuizList).toBe(componentInstance.langMap.quizList);
        expect(buttonQuizLoad).toBe(componentInstance.langMap.quizLoad);
    })

    it('should changes the language', () => {
        // Function to get text of quiz create button
        let getBtnQuizCreateText = () => componentHTML.querySelector(DOMSelectors.linkCreateQuiz).textContent;
        // Set the english language
        (componentHTML.querySelector(DOMSelectors.languageMenuButton) as HTMLButtonElement).click();
        fixture.detectChanges();
        (document.querySelectorAll(DOMSelectors.languageMenuItem)[0] as HTMLButtonElement).click();
        expect(getBtnQuizCreateText()).toBe(mockLanguageMap.en.quizCreate);
        // Set the italian language
        (componentHTML.querySelector(DOMSelectors.languageMenuButton) as HTMLButtonElement).click();
        fixture.detectChanges();
        (document.querySelectorAll(DOMSelectors.languageMenuItem)[1] as HTMLButtonElement).click();
        expect(getBtnQuizCreateText()).toBe(mockLanguageMap.it.quizCreate);
    })

})