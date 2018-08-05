import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, { enableTracing: !true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {};