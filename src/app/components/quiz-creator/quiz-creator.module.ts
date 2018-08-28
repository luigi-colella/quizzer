import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
import { QuizCreatorRouterModule as RouterModule } from './quiz-creator-routing.module';

import { QuizCreatorComponent as Component } from './quiz-creator.component';
//Question Tree sub Component of Component
import { QuestionsTreeComponent } from './questions-tree/questions-tree.component';

@NgModule({
    declarations: [
        Component,
        QuestionsTreeComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class QuizCreatorModule {};