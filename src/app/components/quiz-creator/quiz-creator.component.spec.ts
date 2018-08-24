import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuizCreatorComponent as Component } from './quiz-creator.component';

describe('Quiz Creator Component', () => {

    let componentFixture: ComponentFixture<Component>;
    let componentInstance: DebugElement['componentInstance'];
    let componentHTML: HTMLDocument;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ Component ],
            imports: [
                FormsModule, ReactiveFormsModule
            ]
        })
        .compileComponents();
        componentFixture = TestBed.createComponent(Component);
        componentInstance = componentFixture.debugElement.componentInstance;
        componentHTML = componentFixture.debugElement.nativeElement;
    })

    it('should exists', () => {
        expect(componentInstance).toBeDefined();
    })

    it('should let add a new question', () => {})

    it('should let remove a question', () => {})

    it('should let add a new answer to a question', () => {})

    it('should let remove an answer of a question', () => {})

    it('should let add a new result to quiz', () => {})

    it('should let remove a result of quiz', () => {})

    it('should create a new quiz', () => {})

    it('should move between tabs', () => {})
})