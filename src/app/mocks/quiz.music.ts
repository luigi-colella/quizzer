import { Quiz } from '../types';

export const quizMusic : Quiz = {

    settings: {
        title: 'Quale musica ti piace',
        description: 'Scopri il tuo genere preferito facendo il nostro quiz!',
        type: 'personalityQuiz',
        imageUrl: 'https://images.pexels.com/photos/3104/black-and-white-music-headphones-life.jpg?auto=compress&cs=tinysrgb&h=400'
    },

    answers: [
        {
            value: 'classica',
            title: 'Classica',
            description: 'Ami il mondo classico',
            imageUrl: 'https://images.pexels.com/photos/462430/pexels-photo-462430.jpeg?auto=compress&cs=tinysrgb&h=400'
        },

        {
            value: 'rock',
            title: 'Rock',
            description: 'Ami il rock',
            imageUrl: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=400'
        },

        {
            value: 'rap',
            title: 'Rap',
            description: 'Viva la musica hip hop',
            imageUrl: 'https://images.pexels.com/photos/759832/pexels-photo-759832.jpeg?auto=compress&cs=tinysrgb&h=400'
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
                { text: 'Stringate classiche', value: 'classica' },
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