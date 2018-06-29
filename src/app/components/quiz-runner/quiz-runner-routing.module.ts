import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizRunnerComponent } from './quiz-runner.component';

const routes : Routes = [
    { path: 'launch', component: QuizRunnerComponent },
    { path: 'launch/:id', component: QuizRunnerComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuizRunnerRoutingModule {};