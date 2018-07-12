
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        CommonModule,
        QuizRunnerRoutingModule
    ]
})
export class QuizRunnerModule {};