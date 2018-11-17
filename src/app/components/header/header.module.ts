/* Vendor imports */
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AppLocalization } from '../../services/appLocalization.service';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { AppHeader } from './header.component';

@NgModule({
    declarations: [ AppHeader ],
    imports:      [ MaterialModule, AppRoutingModule ],
    exports:      [ AppHeader, AppRoutingModule ],
    providers:    [ AppLocalization ]
})
export class HeaderModule {}