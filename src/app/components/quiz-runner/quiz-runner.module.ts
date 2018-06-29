
import { NgModule } from '@angular/core';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        QuizRunnerRoutingModule
    ]
})
export class QuizRunnerModule {};