/* Vendor imports */
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
/* App imports */
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TestUtils } from './test-utils';

describe('App Component', () => {

	let testUtils: TestUtils<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:   [ AppModule, RouterModule.forRoot([]) ],
			providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
		}).compileComponents();
		let fixture = TestBed.createComponent(AppComponent);
		testUtils = new TestUtils(fixture);
	});

	it('should exists', () => {
		expect(testUtils.getInstance()).toBeTruthy();
	});

});
