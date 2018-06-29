import { QuizPersonality } from '../interfaces/quizPersonality';

export const quizMusic : QuizPersonality = {

    settings: {
        title: 'Quale musica ti piace',
        intro: 'Scopri il tuo genere preferito facendo il nsotro quiz!'
    },

    profiles: [
        {
            id: 1,
            name: 'Classica',
            description: 'Ami il mondo classico',
        },

        {
            id: 2,
            name: 'Rock',
            description: 'Ami il rock',
        },

        {
            id: 3,
            name: 'Rap',
            description: 'Viva la musica hip hop',
        }
    ],

    questions: [
        {
            text: `Qual'è il tuo artista preferito`,
            answers: [
                { answer: 'Mozart', profileId: 1 },
                { answer: 'Jimi Hendrix', profileId: 2 },
                { answer: 'Eminem', profileId: 3 }
            ]
        },

        {
            text: `Cosa preferisci usare per ascoltare la musica`,
            answers: [
                { answer: 'Giradischi', profileId: 1 },
                { answer: 'Impianto stereo', profileId: 2 },
                { answer: 'Auricolari', profileId: 3 }
            ]
        },

        {
            text: `Qual'è il tuo strumento preferito`,
            answers: [
                { answer: 'Violino', profileId: 1 },
                { answer: 'Chitarra', profileId: 2 },
                { answer: 'Voce', profileId: 3 }
            ]
        },

        {
            text: `Quale scarpe indossi di solito`,
            answers: [
                { answer: 'Mocassini', profileId: 1 },
                { answer: 'Converse', profileId: 2 },
                { answer: 'Adidas', profileId: 3 }
            ]
        },

        {
            text: `Posto ideale per ascoltare la musica`,
            answers: [
                { answer: 'Teatro', profileId: 1 },
                { answer: 'Locale', profileId: 2 },
                { answer: 'Stadio', profileId: 3 }
            ]
        },

    ]

}