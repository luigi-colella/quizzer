
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizHandler } from '../../services/quiz-handler.service';
import { DebugElement } from '@angular/core';

const normalize = (value: string) => {
    return value.trim().toLowerCase();
}

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

    const displayRightTitle = () => {
        let expectedTitle = compIstance.curQuiz.settings.title;
        let title = compHTML.querySelectorAll('h1')[0].textContent;
        expect(title).toEqual(expectedTitle);
    }

    const displayRightIntro = () => {
        let expectedIntro = compIstance.curQuiz.settings.description;
        let intro = compHTML.querySelectorAll('p')[0].textContent;
        expect(
            normalize(intro)
        ).toEqual(
            normalize(expectedIntro)
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
            compHTML.querySelectorAll('button').length
        ).toEqual(1)
    })

    it('Button starts the test', () => {
        let button = compHTML.querySelectorAll('button')[0];
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(
            compHTML.querySelectorAll('input[type="radio"]').length
        ).toEqual(
            compIstance.curQuiz.questions[0].answers.length
        )
    })

    const answerToAllQuestions = () => {
        //Click submit button to start the test
        compHTML.querySelectorAll('button')[0].dispatchEvent(new Event('click'));
        fixture.detectChanges();
        //Get questions number...
        let qNum = compIstance.curQuiz.questions.length;
        //...and loop for every
        for (let i = 0; i < qNum; i++){
            //Click radio button
            compHTML.querySelectorAll('input[type="radio"]')[0].dispatchEvent(new Event('click'));
            fixture.detectChanges();
            //Click submit button
            compHTML.querySelectorAll('button')[0].dispatchEvent(new Event('click'));
            fixture.detectChanges();
        }
    }

    it('Test finishes normally after answering all questions', () => {
        answerToAllQuestions();
        //If there will not be another choices, test is passed
        expect(
            compHTML.querySelectorAll('input[type="radio"]').length
        ).toEqual(0)

    });

    it('Display right result message', () => {
        answerToAllQuestions();
        let expectedResultTitle = compIstance.curQuizResult.title;
        let expectedResultDescription = compIstance.curQuizResult.description;
        expect(
            normalize(compHTML.querySelectorAll('h4')[0].textContent)
        ).toEqual(
            normalize(expectedResultTitle)
        ) && expect(
            normalize(compHTML.querySelectorAll('#resultQuiz p')[0].textContent)
        ).toEqual(
            normalize(expectedResultDescription)
        )
    })

    it('After finishing the quiz, you can repeat it', () => {
        answerToAllQuestions();
        compHTML.querySelectorAll('button')[0].dispatchEvent(new Event('click'));
        fixture.detectChanges();
        displayRightIntro();
        displayRightTitle();
    })

});