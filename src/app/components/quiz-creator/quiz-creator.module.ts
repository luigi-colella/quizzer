import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
import { QuizCreatorRouterModule as RouterModule } from './quiz-creator-routing.module';
import { QuizCreatorComponent as Component } from './quiz-creator.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

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
    entryComponents: [
        DialogFormComponent
    ]
})
export class QuizCreatorModule {};