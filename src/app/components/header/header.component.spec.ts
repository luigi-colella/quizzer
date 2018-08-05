import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { AppHeader } from './header.component';

describe('Header Component', () => {

    let component = AppHeader;
    let fixture: ComponentFixture<AppHeader>;
    let componentInstance: DebugElement['componentInstance'];
    let componentHTML: HTMLDocument

    beforeEach(() => {

        TestBed
        .configureTestingModule({
            declarations: [ component ]
        })
        fixture = TestBed.createComponent(component);
        fixture.detectChanges();
        let componentDebug = fixture.debugElement;
        componentInstance = componentDebug.componentInstance;
        componentHTML = componentDebug.nativeElement;

    })

    it('should exists', () => {
        expect(componentInstance).toBeDefined();
    })

    it('should have title', () => {
        let expectedTitle = componentInstance.title;
        let currentTitle = componentHTML.querySelector('h1').innerText;
        expect(expectedTitle).toBe(currentTitle);
    })

    it('should have links', () => {
        expect(
            componentHTML.querySelector('ul').querySelectorAll('li').length
        ).toBeGreaterThan(0);
    })

})