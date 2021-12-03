import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComptesComponent} from "./gestion-des-comptes/client/create-comptes/create-comptes.component"
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'path', loadChildren: () => import('./gestion-des-comptes/gestion-des-comptes.module').then(m => m.GestionDesComptesModule) },
  { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) }, 
  { path: 'path', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) },
  { path: 'signUp', component: CreateComptesComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
