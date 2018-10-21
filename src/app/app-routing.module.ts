import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {};