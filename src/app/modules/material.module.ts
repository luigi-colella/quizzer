import { NgModule } from '@angular/core';
//Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatTooltipModule
    ]
})
export class MaterialModule {}