/* Vendor imports */
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
/* App imports */
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('App Component', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ AppModule, RouterModule.forRoot([]) ],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		}).compileComponents();
	}));

	it('should exists', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

});
