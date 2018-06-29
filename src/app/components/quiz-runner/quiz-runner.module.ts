
import { NgModule } from '@angular/core';

import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';

import { QuizHandler } from '../../services/quiz-handler.service';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        QuizRunnerRoutingModule
    ],
    providers: [
        QuizHandler
    ]
})
export class QuizRunnerModule {};