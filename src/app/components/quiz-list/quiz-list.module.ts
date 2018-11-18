/* Vendor imports */
import { NgModule } from '@angular/core';
/* App imports */
import { QuizListComponent } from './quiz-list.component';
import { QuizListRoutingModule } from './quiz-list-routing.module';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        QuizListComponent
    ],
    imports: [
        QuizListRoutingModule,
        SharedModule
    ]
})
export class QuizListModule {}