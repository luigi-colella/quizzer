import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { QuizCreatorComponent as Component } from './quiz-creator.component';

describe('Quiz Creator Component', () => {

    let componentFixture: ComponentFixture<Component>;
    let componentInstance: DebugElement['componentInstance'];
    let componentHTML: HTMLDocument;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ Component ]
        })
        .compileComponents();
        componentFixture = TestBed.createComponent(Component);
        componentInstance = componentFixture.debugElement.componentInstance;
        componentHTML = componentFixture.debugElement.nativeElement;
    })

    it('should exists', () => {
        expect(componentInstance).toBeDefined();
    })

})