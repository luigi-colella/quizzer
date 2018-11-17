/* Vendor imports */
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AppLocalization } from '../../services/appLocalization.service';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { AppHeaderComponent } from './header.component';

@NgModule({
    declarations: [ AppHeaderComponent ],
    imports:      [ MaterialModule, AppRoutingModule ],
    exports:      [ AppHeaderComponent, AppRoutingModule ],
    providers:    [ AppLocalization ]
})
export class HeaderModule {}