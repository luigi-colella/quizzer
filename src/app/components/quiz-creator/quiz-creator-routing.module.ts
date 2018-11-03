/* Vendor imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* App imports */
import { QuizCreatorComponent as Component } from './quiz-creator.component';

const routes: Routes = [
    { path: 'create',  component: Component }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuizCreatorRouterModule {};