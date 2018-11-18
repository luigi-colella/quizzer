/* Vendor imports */
import { NgModule } from '@angular/core';
/* App imports */
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../modules/shared.module';
import { AppHeaderComponent } from './header.component';

@NgModule({
    declarations: [ AppHeaderComponent ],
    imports:      [ AppRoutingModule, SharedModule ],
    exports:      [ AppHeaderComponent, AppRoutingModule ]
})
export class HeaderModule {}