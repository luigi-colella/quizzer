/* Vendor imports */
import { trigger, transition, style, query, animate, group } from '@angular/animations'

export const AppComponentTransitions = trigger('routeAnimation', [
    // Transition for the navigation from left to right
    transition('quizCreator => quizList, quizList => quizRunner, quizCreator => quizRunner', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({ position: 'absolute', top: '-2em', width: '100%' })),
        group([
            query(':enter', style({ left: '100%' })),
            query(':leave', style({ left: '0%' }))
        ]),
        group([
            query(':enter', animate('500ms ease-out', style({ left: '0%'}) )),
            query(':leave', animate('500ms ease-out', style({ left: '-100%'}) ))
        ]),
        query(':enter', animate('300ms ease-out', style({ left: '0%' }))),
    ]),
    // Transition for the navigation from right to left
    transition('quizRunner => quizList, quizList => quizCreator, quizRunner => quizCreator', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({ position: 'absolute', top: '-2em', width: '100%' })),
        group([
            query(':enter', style({ left: '-100%' })),
            query(':leave', style({ left: '0%' }))
        ]),
        group([
            query(':enter', animate('500ms ease-out', style({ left: '0%'}) )),
            query(':leave', animate('500ms ease-out', style({ left: '100%'}) ))
        ]),
        query(':enter', animate('300ms ease-out', style({ left: '0%' }))),
    ])
])