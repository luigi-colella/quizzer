import { NgModule } from '@angular/core';

import { QuizCreatorComponent as Component } from './quiz-creator.component';
import { QuizCreatorRouterModule as RouterModule } from './quiz-creator-routing.module';

@NgModule({
    declarations: [ Component ],
    imports: [ RouterModule ]
})
export class QuizCreatorModule {};