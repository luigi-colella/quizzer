/* Vendor imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';
import { QuizHandler } from '../../services/quizHandler.service';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        CommonModule,
        QuizRunnerRoutingModule,
        MaterialModule
    ],
    providers: [
        QuizHandler
    ]
})
export class QuizRunnerModule {};