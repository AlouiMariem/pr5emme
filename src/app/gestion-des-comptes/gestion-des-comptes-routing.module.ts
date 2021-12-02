import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesComptesComponent } from './gestion-des-comptes.component';

const routes: Routes = [{ path: '', component: GestionDesComptesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDesComptesRoutingModule { }
