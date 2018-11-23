/* Vendor imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* App imports */
import { QuizRunnerComponent } from './quiz-runner.component';

const routes : Routes = [
    { path: 'launch', component: QuizRunnerComponent, data: { animation: 'quizRunner' } },
    { path: 'launch/:id', component: QuizRunnerComponent, data: { animation: 'quizRunner' } }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class QuizRunnerRoutingModule {};