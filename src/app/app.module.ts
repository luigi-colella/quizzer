import { NgModule } from '@angular/core';
//ngModules
import { BrowserModule } from '@angular/platform-browser';
import { QuizRunnerModule } from './components/quiz-runner/quiz-runner.module';
import { QuizCreatorModule } from './components/quiz-creator/quiz-creator.module';
//Components
import { AppHeader } from './components/header/header.component';
import { AppComponent } from './app.component';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Services
import { QuizHandler } from './services/quiz-handler.service';
import { FileLoader } from './services/fileLoader.service';

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
  providers: [
    QuizHandler,
    FileLoader
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
