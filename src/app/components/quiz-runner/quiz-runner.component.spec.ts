
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizHandler } from '../../services/quiz-handler.service';
import { DebugElement } from '@angular/core';

describe('QuizRunner Component', () => {

    let fixture: ComponentFixture<QuizRunnerComponent>;
    let compDebug: DebugElement;
    let compIstance: DebugElement['componentInstance'];
    let compHTML: HTMLElement;

    beforeEach(() => {
        TestBed
        .configureTestingModule({
            declarations: [ QuizRunnerComponent ],
            imports: [ RouterModule.forRoot([]) ],
            providers: [
                QuizHandler,
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

    it('QuizRunner display right title of quiz', () => {
        let expectedTitle = compIstance.curQuiz.settings.title;
        let title = compHTML.querySelectorAll('h1')[0].textContent;
        expect(title).toEqual(expectedTitle);
    })

});