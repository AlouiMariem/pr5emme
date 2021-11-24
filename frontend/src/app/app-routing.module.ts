import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComptesComponent} from "../app/gestion-des-comptes/client/create-comptes/create-comptes.component"

const routes: Routes = [
  { path: 'path', loadChildren: () => import('./gestion-des-comptes/gestion-des-comptes.module').then(m => m.GestionDesComptesModule) }, 
  { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) }, 
  { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) },
  { path: 'SingUp', component: CreateComptesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
