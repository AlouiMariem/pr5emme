import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDesComptesRoutingModule } from './gestion-des-comptes-routing.module';
import { GestionDesComptesComponent } from './gestion-des-comptes.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { DeleteComptesComponent } from './admin/delete-comptes/delete-comptes.component';
import { ReadComptesComponent } from './admin/read-comptes/read-comptes.component';
import { UpdateComptesComponent } from './client/update-comptes/update-comptes.component';
import { CreateComptesComponent } from './client/create-comptes/create-comptes.component';


@NgModule({
  declarations: [
    GestionDesComptesComponent,
    AdminComponent,
    ClientComponent,
    DeleteComptesComponent,
    ReadComptesComponent,
    UpdateComptesComponent,
    CreateComptesComponent
  ],
  imports: [
    CommonModule,
    GestionDesComptesRoutingModule
  ]
})
export class GestionDesComptesModule { }
