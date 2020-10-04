import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmersComponent } from './pages/farmers/farmers.component';
import {AddFarmerComponent} from "./pages/add-farmer/add-farmer.component";

const routes: Routes = [
  {
    path: '',
    component: FarmersComponent
  },
  {
    path: 'add',
    component: AddFarmerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingModule { }
