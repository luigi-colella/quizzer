/* Vendor imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizListComponent as Component } from './quiz-list.component';
import { QuizListRoutingModule as RoutingModule } from './quiz-list-routing.module';
import { QuizDatabase } from '../../services/quizDatabase.service';

@NgModule({
    declarations: [
        Component
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        RoutingModule
    ],
    providers: [
        QuizDatabase
    ]
})
export class QuizListModule {}