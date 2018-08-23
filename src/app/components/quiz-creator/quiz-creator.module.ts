import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuizCreatorComponent as Component } from './quiz-creator.component';
import { QuizCreatorRouterModule as RouterModule } from './quiz-creator-routing.module';

@NgModule({
    declarations: [ Component ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class QuizCreatorModule {};