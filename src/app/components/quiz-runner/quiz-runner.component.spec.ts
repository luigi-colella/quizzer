
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizRunnerComponent } from './quiz-runner.component';

describe('QuizRunner Component', () => {

    let comp: QuizRunnerComponent;
    let fixture: ComponentFixture<QuizRunnerComponent>;

    beforeEach(() => {
        TestBed
        .configureTestingModule({
            declarations: [ QuizRunnerComponent ],
            imports: [ RouterModule.forRoot([]) ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
        .compileComponents()

        fixture = TestBed.createComponent(QuizRunnerComponent);
        comp = fixture.debugElement.componentInstance;
    })

    it('Component exists', () => {
        expect(comp).toBeTruthy();
    })

});