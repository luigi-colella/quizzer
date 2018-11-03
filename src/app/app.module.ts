/* Vendor imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* App imports */
import { AppRoutingModule } from './app-routing.module';
import { QuizRunnerModule } from './components/quiz-runner/quiz-runner.module';
import { QuizCreatorModule } from './components/quiz-creator/quiz-creator.module';
import { AppHeader } from './components/header/header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppHeader,
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuizRunnerModule,
    QuizCreatorModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
