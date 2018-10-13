import { Quiz } from '../interfaces/quiz';

export const quizMusic : Quiz = {

    settings: {
        title: 'Quale musica ti piace',
        description: 'Scopri il tuo genere preferito facendo il nostro quiz!',
        type: 'personalityQuiz'
    },

    answers: [
        {
            value: 'classica',
            title: 'Classica',
            description: 'Ami il mondo classico',
        },

        {
            value: 'rock',
            title: 'Rock',
            description: 'Ami il rock',
        },

        {
            value: 'rap',
            title: 'Rap',
            description: 'Viva la musica hip hop',
        }
    ],

    questions: [
        {
            text: `Qual'è il tuo artista preferito`,
            answers: [
                { text: 'Mozart', value: 'classica' },
                { text: 'Jimi Hendrix', value: 'rock' },
                { text: 'Eminem', value: 'rap' }
            ]
        },

        {
            text: `Cosa preferisci usare per ascoltare la musica`,
            answers: [
                { text: 'Giradischi', value: 'classica' },
                { text: 'Impianto stereo', value: 'rock' },
                { text: 'Auricolari', value: 'rap' }
            ]
        },

        {
            text: `Qual'è il tuo strumento preferito`,
            answers: [
                { text: 'Violino', value: 'classica' },
                { text: 'Chitarra', value: 'rock' },
                { text: 'Voce', value: 'rap' }
            ]
        },

        {
            text: `Quale scarpe indossi di solito`,
            answers: [
                { text: 'Mocassini', value: 'classica' },
                { text: 'Converse', value: 'rock' },
                { text: 'Adidas', value: 'rap' }
            ]
        },

        {
            text: `Posto ideale per ascoltare la musica`,
            answers: [
                { text: 'Teatro', value: 'classica' },
                { text: 'Locale', value: 'rock' },
                { text: 'Stadio', value: 'rap' }
            ]
        },

    ]

}