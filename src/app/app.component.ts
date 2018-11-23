/* Vendor imports */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* App imports */
import { AppComponentTransitions } from './app.transitions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [ AppComponentTransitions ]
})
export class AppComponent {

	getAnimationState(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}

}
