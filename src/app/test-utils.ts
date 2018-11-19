/* Vendor imports */
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export class TestUtils <T> {

    protected componentFixture: ComponentFixture<T>;
    protected componentDebug: ComponentFixture<T>['debugElement'];
    protected componentInstance: T;
    protected componentHTML: HTMLDocument;
    protected documentHTML: HTMLDocument;

    constructor (fixture: ComponentFixture<T>) {
        this.componentFixture = fixture;
        this.componentDebug = fixture.debugElement;
        this.componentInstance = fixture.componentInstance;
        this.componentHTML = fixture.debugElement.nativeElement;
        this.componentFixture.detectChanges();
    };

    /**
     * Trigger a change detection for the current fixture element.
     */
    detectChanges () {
        this.componentFixture.detectChanges();
    };
    /**
     * Wait for fixture UI state stable.
     */
    whenRenderingDone () {
        this.componentFixture.whenRenderingDone();
    };
    /**
     * Get the component instance of the current fixture.
     * @return {Object} the instance object.
     */
    getInstance (): T {
        return this.componentInstance;
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

    /**
     * Utils methods for the DOM elements of the fixture.
     */
    dom = {
        /**
         * Get a DOM element.
         * @param  {string} selectorCSS CSS Selector of element.
         * @param  {number} [selectorIndex] Index of element. Default 0.
         * @return {string} DOM Element.
         */
        getElement: (selectorCSS: string, selectorIndex?: number): Element => {
            let index = selectorIndex ? selectorIndex : 0;
            let componentElement = this.componentHTML.querySelectorAll(selectorCSS)[index];
            if (componentElement) return componentElement;
            let documentElement = document.querySelectorAll(selectorCSS)[index];
            if (documentElement) return documentElement;
            else throw 'Element not found: ' + selectorCSS;
        },
        /**
         * Get the number of requestd DOM elements.
         * @param  {string} selectorCSS CSS Selector of elements.
         * @return {number} Number of elements.
         */
        getElementsNumber: (selectorCSS: string): number => {
            let elements = this.componentHTML.querySelectorAll(selectorCSS);
            if (elements) return elements.length;
            else throw 'Elements not found: ' + selectorCSS;
        },
        /**
         * Get the text of a DOM element.
         * @param  {string} selectorCSS CSS Selector of element.
         * @param  {number} [selectorIndex] Index of element. Default 0.
         * @return {string} Text of element.
         */
        getElementText: (selectorCSS: string, selectorIndex?: number): string => {
            let index = selectorIndex ? selectorIndex : 0;
            return this.dom.getElement(selectorCSS, index).textContent;
        },
        /**
         * Get the attribute of a DOM element.
         * @param  {string} selectorCSS CSS Selector of element.
         * @param  {string} attribute Attribute's name.
         * @param  {number} [selectorIndex] Index of element. Default 0.
         * @return {string} Attribute's value.
         */
        getElementAttribute: (selectorCSS: string, attribute: string, selectorIndex?: number): any => {
            let index = selectorIndex ? selectorIndex : 0;
            return this.dom.getElement(selectorCSS, index)[attribute];
        },
        /**
         * Click on a DOM element.
         * @param  {string} selectorCSS CSS Selector of element to click.
         * @param  {number} [selectorIndex] Index of element. Default 0.
         */
        click: (selectorCSS: string, selectorIndex?: number) => {
            let index = selectorIndex ? selectorIndex : 0;
            (this.dom.getElement(selectorCSS, index) as HTMLInputElement).click();
            this.componentFixture.detectChanges();
        }
    }

    /**
     * Utils methods for Debug elements of the fixture
     */
    debug = {
        /**
         * Get the debug element instance.
         * @param  {string} selectorCSS CSS Selector of element.
         * @param  {number} [selectorIndex] Index of element. Default 0.
         */
        getElement: (selectorCSS) => {
            return this.componentDebug.query(By.css(selectorCSS)).componentInstance;
        }
    }

}