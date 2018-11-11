/* Vendor imports */
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
/* App imports */
import { QuizDatabase } from './quizDatabase.service';

describe('QuizDatabase Service', () => {

    let service: QuizDatabase;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule ],
            providers: [ QuizDatabase ]
        });
        service = TestBed.get(QuizDatabase);
    });

    it('should exists', () => {
        expect(service).toBeDefined();
    })

    it('should get a quiz', () => {
        return new Promise((resolve) => {
            service.get(0).subscribe((quiz) => {
                expect(quiz.settings).toBeDefined();
                expect(quiz.questions).toBeDefined();
                expect(quiz.answers).toBeDefined();
                resolve();
            })
        })
    })

    it('should get all quizzes', () => {
        return new Promise((resolve) => {
            service.getAll().subscribe((quizzes) => {
                for (let i = 0; i < quizzes.length; i++) {
                    expect(quizzes[i].settings).toBeDefined();
                    expect(quizzes[i].questions).toBeDefined();
                    expect(quizzes[i].answers).toBeDefined();
                }
                resolve();
            })
        })
    })

})