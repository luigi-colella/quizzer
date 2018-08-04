import { NgModule } from '@angular/core';
//ngModules
import { BrowserModule } from '@angular/platform-browser';
import { QuizRunnerModule } from './components/quiz-runner/quiz-runner.module';
//Components
import { AppHeader } from './components/header/header.component';
import { AppComponent } from './app.component';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Services
import { QuizHandler } from './services/quiz-handler.service';

@NgModule({
  declarations: [
    AppHeader,
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuizRunnerModule,
    AppRoutingModule
  ],
  providers: [
    QuizHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
