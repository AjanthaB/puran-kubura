import {NgModule} from '@angular/core';
import {PaddyFieldsComponent} from './pages/paddy-fields/paddy-fields.component';
import {PaddyFieldsRoutingModule} from './paddy-fields-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AddPaddyFieldComponent } from './pages/add-paddy-field/add-paddy-field.component';

@NgModule({
  declarations: [PaddyFieldsComponent, AddPaddyFieldComponent],
  imports: [
    SharedModule,
    PaddyFieldsRoutingModule,
  ]
})
export class PaddyFieldsModule { }
