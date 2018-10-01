
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        CommonModule,
        QuizRunnerRoutingModule,
        MaterialModule
    ]
})
export class QuizRunnerModule {};