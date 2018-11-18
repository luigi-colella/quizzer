/* Vendor imports */
import { NgModule } from '@angular/core';
/* App imports */
import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        QuizRunnerRoutingModule,
        SharedModule
    ]
})
export class QuizRunnerModule {};