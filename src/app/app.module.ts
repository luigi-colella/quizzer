/* Vendor imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* App imports */
import { HeaderModule } from './components/header/header.module';
import { QuizRunnerModule } from './components/quiz-runner/quiz-runner.module';
import { QuizCreatorModule } from './components/quiz-creator/quiz-creator.module';
import { QuizListModule } from './components/quiz-list/quiz-list.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    QuizRunnerModule,
    QuizCreatorModule,
    QuizListModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
