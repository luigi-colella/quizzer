import { NgModule } from '@angular/core';
//Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialModule {}