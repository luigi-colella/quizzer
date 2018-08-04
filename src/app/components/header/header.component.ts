import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class AppHeader implements OnInit {

    title = 'Quizzer'

    constructor(){

    }

    ngOnInit(){}

}