import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaddyFieldsComponent} from './pages/paddy-fields/paddy-fields.component';
import {AddPaddyFieldComponent} from './pages/add-paddy-field/add-paddy-field.component';

const routes: Routes = [
  {
    path: '',
    component: PaddyFieldsComponent
  },
  {
    path: 'add',
    component: AddPaddyFieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaddyFieldsRoutingModule { }
