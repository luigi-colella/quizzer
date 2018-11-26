/* Vendor imports */
import { trigger, transition, style, query, animate, group, stagger, sequence } from '@angular/animations';
/* App imports */
import { QuizStates } from './quiz-runner.component';

const quizStates: QuizStates = {
    READY: 'ready',
    STARTED: 'started',
    FINISHED: 'finished'
}

export const runnerStateTransition = trigger('quizStateAnimation', [
    transition(`* => ${quizStates.STARTED}`, [
        group([
            query('.intro:leave', animate('500ms ease-in-out', style({
                paddingTop: '0px', paddingRight: '0px', paddingBottom: '0px', paddingLeft: '0px'
            }))),
            query('.intro:leave p', animate('500ms ease-in-out', style({ 
                transform: 'translateX(-100%)',
                height: '0px',
                marginTop: '0px', marginRight: '0px', marginBottom: '0px', marginLeft: '0px'
            }))),
            query('.intro:leave img', animate('500ms ease-in-out', style({ 
                transform: 'scale(0)',
                height: '0px',
            }))),
            query('#quiz-questions p', style({ opacity: '0' })),
            query('#quiz-questions mat-radio-button', style({
                transform: 'translateX(-100%)',
            }))
        ]),
        group([
            query('#quiz-questions p', animate('1s ease-in-out', style({ opacity: '1' }))),
            query('#quiz-questions mat-radio-button', stagger(400, [
                animate('500ms ease-in-out' , style({  transform: 'translateX(0%)' })),
            ]))
        ])
    ]),
    transition(`* => ${quizStates.FINISHED}`, [
        group([
            query('#quiz-result h2', style({ transform: 'translateX(100%)' })),
            query('#quiz-result p', style({ transform: 'translateX(-100%)' })),
            query('.result .thumbnail img', style({ transform: 'scale(.6)' }))
        ]),
        group([
            query('#quiz-result h2', animate('500ms ease-in-out', style({ transform: 'translateX(0%)' }))),
            query('#quiz-result p', animate('500ms ease-in-out', style({ transform: 'translateX(0%)' }))),
            query('.result .thumbnail img', animate('500ms ease-in-out', style({ transform: 'scale(1)' })))
        ]),
    ]),
    transition(`${quizStates.FINISHED} => ${quizStates.READY}`, [
        group([
            query('.intro p', style({ transform: 'translateX(100%)' })),
            query('.intro .thumbnail img', style({ transform: 'scale(.6)' }))
        ]),
        group([
            query('.intro p', animate('500ms ease-in-out', style({ transform: 'translateX(0%)' }))),
            query('.intro .thumbnail img', animate('500ms ease-in-out', style({ transform: 'scale(1)' })))
        ]),
    ])
])

export const runnerQuestionChangeTransition = trigger('questionChangeAnimation', [
    transition(':increment', [
        group([
            query('#quiz-questions p', style({ opacity: '0' })),
            query('#quiz-questions mat-radio-button:enter', style({
                transform: 'translateX(-100%)',
                height: '0px'
            }))
        ]),
        group([
            query('#quiz-questions p', animate('1s ease-in-out', style({ opacity: '1' }))),
            query('#quiz-questions mat-radio-button:leave', stagger(400, [
                animate('500ms ease-in-out' , style({ transform: 'translateX(100%)' })),
                style({ height: '0px' })
            ]), { optional: true }),
            query('#quiz-questions mat-radio-button:enter', stagger(400, [
                animate('500ms ease-in-out' , style({  transform: 'translateX(0%)' })),
                style({ height: 'auto' })
            ]))
        ])
    ])
])

// Mind to set explicity padding and margin properties for each side 
// because Firefox doesn't recognize 'padding' and 'margin' as shorthand properties for the method `getComputedStyle`.
// Since Angular animations use this method, when it is used in Firefox, it'll return an empty string instead of a value
// that could be cause problems or errors in the template rendering. 
// To test this: `window.getComputedStyle(document.body).padding === ''` or `window.getComputedStyle(document.body).margin === ''`
