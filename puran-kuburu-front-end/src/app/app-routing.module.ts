import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'farmers',
    loadChildren: () => import('./modules/farmers/farmers.module').then(m => m.FarmersModule)
  },
  {
    path: 'paddy-fields',
    loadChildren: () => import('./modules/paddy-fields/paddy-fields.module').then(m => m.PaddyFieldsModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(auth => auth.AuthenticationModule)
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
