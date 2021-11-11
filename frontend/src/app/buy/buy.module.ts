import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { ClientComponent } from './buy/client/client.component';
import { BuyArticleComponent } from './admin/buy-article/buy-article.component';
import { ShoppingCardComponent } from './admin/shopping-card/shopping-card.component';
import { ReminderComponent } from './admin/reminder/reminder.component';
import { RechercheComponent } from './admin/recherche/recherche.component';


@NgModule({
  declarations: [
    BuyComponent,
    ClientComponent,
    BuyArticleComponent,
    ShoppingCardComponent,
    ReminderComponent,
    RechercheComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }
