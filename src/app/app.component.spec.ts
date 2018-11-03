/* Vendor imports */
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
/* App imports */
import { AppHeader } from './components/header/header.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppHeader,
				AppComponent
			],
			imports: [RouterModule.forRoot([])],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		}).compileComponents();
	}));

	it('Application exists', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

});
