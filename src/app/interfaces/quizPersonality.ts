
export interface Answer {
    answer: string,
    profileId: number
}

export interface Question {
    text: string
    answers: Answer[]
}

export interface Profile {
    id: number,
    name: string,
    description: string,
}

export interface Settings {
    title: string,
    intro?: string
}

export interface QuizPersonality {

    settings: Settings
   
    profiles: Profile[]

    questions: Question[]

}