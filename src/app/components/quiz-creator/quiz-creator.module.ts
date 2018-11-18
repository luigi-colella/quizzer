/* Vendor imports */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* App imports */
import { QuizCreatorRouterModule } from './quiz-creator-routing.module';
import { QuizCreatorComponent } from './quiz-creator.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        QuizCreatorComponent,
        DialogFormComponent
    ],
    imports: [
        QuizCreatorRouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    entryComponents: [
        DialogFormComponent
    ]
})
export class QuizCreatorModule {};