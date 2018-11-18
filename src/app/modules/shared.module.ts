/* Vendor imports */
import { NgModule } from "@angular/core";
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
/* App imports */
import { AppLocalization } from '../services/appLocalization.service';
import { QuizHandler } from '../services/quizHandler.service';
import { QuizDatabase } from '../services/quizDatabase.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [
        AppLocalization,
        QuizHandler,
        QuizDatabase
    ]
})
export class SharedModule {};