/* Vendor imports */
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
/* App imports */
import { Quiz, AnswerValue, AppLanguageMap } from '../../types';
import { QuizHandler } from '../../services/quizHandler.service';
import { QuizDatabase } from '../../services/quizDatabase.service';
import { AppLocalization } from '../../services/appLocalization.service';
import { runnerStateTransition, runnerQuestionChangeTransition } from './quiz-runner.transitions';
import { LanguageMap } from '../../langMapType';
/* Quiz sample imports */
import { quizMusic as mockQuiz } from '../../mocks/quiz.music';

type FileInputEvent = Event & { target: { files: FileList } };
type FileLoaderEvent = Event & { target: { result: string } };
export interface QuizStates {
    BOOT: 'boot',
    LOADED: 'loaded',
    STARTED: 'started',
    FINISHED: 'finished'
}

@Component({
    selector: 'app-quiz-runner',
    templateUrl: './quiz-runner.component.html',
    styleUrls:  ['./quiz-runner.component.scss'],
    animations: [runnerStateTransition, runnerQuestionChangeTransition]
})
export class QuizRunnerComponent implements OnInit, OnDestroy {

    curQuiz: Quiz;
    curQuestionIndex: number;
    curQuizResult: Quiz['answers'][0];
    givenUserAnswers: AnswerValue[];
    quizState: QuizStates['BOOT'] |QuizStates['LOADED'] | QuizStates['STARTED'] | QuizStates['FINISHED']
    quizAvailableStates: QuizStates = {
        BOOT: 'boot',
        LOADED: 'loaded',
        STARTED: 'started',
        FINISHED: 'finished'
    }
    submitButtonIsDisabled: boolean = false;
    languageMap: AppLanguageMap;
    languageMapSubscription: Subscription

    constructor(
        private route: ActivatedRoute,
        private quizHandler: QuizHandler,
        private quizDatabase: QuizDatabase,
        private localization: AppLocalization
    ){}

    ngOnInit(){
        // Get quiz to display
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.quizDatabase.get(Number(id)).subscribe({
                next: (quiz) => {
                    this.loadQuiz(this.quizHandler.load(quiz).getQuizObject());
                }
            })
        } else {
            this.quizState = this.quizAvailableStates.BOOT;
            //this.loadQuiz(this.quizHandler.load(mockQuiz).getQuizObject());
        }
        // Set language map
        this.languageMap = {} as LanguageMap;
        this.languageMapSubscription = this.localization.getLanguageMap().subscribe({
            next: map => this.languageMap = map
        })
        // Init keyboard shortcut
        document.addEventListener('keydown', this.onKeyboardEnterEvent);
    }

    ngOnDestroy () {
        this.languageMapSubscription.unsubscribe();
        document.removeEventListener('keydown', this.onKeyboardEnterEvent);
    }

    onKeyboardEnterEvent = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter') this.onSubmit();
    }

    uploadQuiz(event: FileInputEvent) {
        let uploadedFiles = event.target.files;
        if (uploadedFiles.length === 1) {
            let reader: FileReader = new FileReader();
            // Reader's events
            reader.onerror = (event) => { throw 'Error in file upload: ' + event };
            reader.onload = (event: FileLoaderEvent) => {
                let quiz = this.quizHandler.decode(event.target.result);
                this.loadQuiz(quiz);
            }
            // Start reader
            reader.readAsDataURL(uploadedFiles[0]);
        } else {
            throw 'Number of uploaded files not correct: ' + uploadedFiles.length;
        }
    }

    loadQuiz(quiz: Quiz) {
        this.resetQuiz();
        this.quizHandler.load(quiz);
        this.curQuiz = quiz;
    }

    loadRandomQuiz () {
        this.quizDatabase.getRandom().subscribe({
            next: quiz => this.loadQuiz(quiz)
        });
    }

    selectAnswer(answer : AnswerValue) {
        this.submitButtonIsDisabled = false;
        this.givenUserAnswers[this.curQuestionIndex] = answer;
    }

    onSubmit() : void {

        if (this.quizState === this.quizAvailableStates.LOADED) {
            this.quizState = this.quizAvailableStates.STARTED;
            this.curQuestionIndex = 0;
            this.submitButtonIsDisabled = true;
        } else if (this.quizState === this.quizAvailableStates.STARTED && this.givenUserAnswers[this.curQuestionIndex] !== undefined) {
            if (this.curQuestionIndex + 1 === this.curQuiz.questions.length) {
                this.curQuizResult = this.quizHandler.getResult(this.givenUserAnswers);
                this.quizState = this.quizAvailableStates.FINISHED;
            } else {
                this.curQuestionIndex += 1;
                this.submitButtonIsDisabled = true;
            }
        } else if (this.quizState === this.quizAvailableStates.FINISHED) {
            this.resetQuiz();
        }

    }

    resetBoot() {
        this.quizState = this.quizAvailableStates.BOOT;
    }

    resetQuiz() {
        this.quizState = this.quizAvailableStates.LOADED;
        this.curQuestionIndex = 0;
        this.givenUserAnswers = [];
    }

};