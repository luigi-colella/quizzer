import { Quiz } from '../interfaces/quiz';

export const quizCulture : Quiz = {

    settings: {
        title: 'Quiz di cultura generale',
        description: 'Metti alla prova le tue conoscenze con questo quiz',
        type: 'trueorfalseQuiz'
    },

    answers: [
        {
            value: '5',
            title: 'Super!',
            description: 'Complimenti, sei riuscito a rispondere correttamente a tutte le domande'
        },
        {
            value: '3-4',
            title: 'Buono',
            description: 'Non male, ma puoi fare di meglio'
        },
        {
            value: '1-2',
            title: 'Scarso',
            description: 'Impegnati di più la prossima volta ;)'
        }
    ],

    questions: [
        {
            text: 'Il primo presidente nero degli Stati Uniti è stato Barack Obama.',
            answers: [
                { text: 'VERO', value: true },
                { text: 'FALSO', value: false }
            ]
        },
        {
            text: 'La sigaretta è stata inventata dal tedesco Daimler nel 1885.',
            answers: [
                { text: 'VERO', value: false },
                { text: 'FALSO', value: true }
            ]
        },
        {
            text: 'Per mangiare tutte le portate di una cena, gli antichi romani si provocavano il vomito.',
            answers: [
                { text: 'VERO', value: true },
                { text: 'FALSO', value: false }
            ]
        },
        {
            text: 'La capitale dell\'Australia è Sidney.',
            answers: [
                { text: 'VERO', value: false },
                { text: 'FALSO', value: true }
            ]
        },
        {
            text: 'Il record di lunghezza delle unghie umane è di 9 metri.',
            answers: [
                { text: 'VERO', value: true },
                { text: 'FALSO', value: false }
            ]
        }
    ]

}