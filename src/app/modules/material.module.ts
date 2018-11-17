import { NgModule } from '@angular/core';
//Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        MatCardModule,
        MatMenuModule
    ]
})
export class MaterialModule {}