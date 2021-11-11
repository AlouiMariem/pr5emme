import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'path', loadChildren: () => import('./gestion-des-comptes/gestion-des-comptes.module').then(m => m.GestionDesComptesModule) }, { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) }, { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
