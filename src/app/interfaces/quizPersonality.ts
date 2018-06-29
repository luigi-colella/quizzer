
interface Answer {
    answer: string,
    profileId: number
}

interface Question {
    text: string
    answers: Answer[]
}

interface Profile {
    id: number,
    name: string,
    description: string,
}

export interface QuizPersonality {

    settings: {
        titles: string,
        intro?: string
    }
   
    profiles: Profile[]

    questions: Question[]

}