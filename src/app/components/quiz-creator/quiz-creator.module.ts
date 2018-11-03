/* Vendor imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizCreatorRouterModule as RouterModule } from './quiz-creator-routing.module';
import { QuizCreatorComponent as Component } from './quiz-creator.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { QuizHandler } from '../../services/quizHandler.service';

@NgModule({
    declarations: [
        Component,
        DialogFormComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [
        QuizHandler
    ],
    entryComponents: [
        DialogFormComponent
    ]
})
export class QuizCreatorModule {};