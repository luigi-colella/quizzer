/* Vendor imports */
import { Component } from '@angular/core';
/* App imports */
import { APP_TITLE } from '../../constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class AppHeader {

    title = APP_TITLE

}