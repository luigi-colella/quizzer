/* Vendor imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* App imports */
import { QuizListComponent as Component } from './quiz-list.component';

let routes: Routes = [
    { path: 'list', component: Component  }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class QuizListRoutingModule {}