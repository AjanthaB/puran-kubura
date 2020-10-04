import { NgModule } from '@angular/core';
import { FarmersRoutingModule } from './farmers-routing.module';
import { SharedModule } from '../shared/shared.module';
import {FarmersComponent} from './pages/farmers/farmers.component';
import { AddFarmerComponent } from './pages/add-farmer/add-farmer.component';

@NgModule({
  declarations: [FarmersComponent, AddFarmerComponent],
  imports: [
    SharedModule,
    FarmersRoutingModule,
  ]
})
export class FarmersModule { }
