import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './admin/shopping-card/shopping-card.component';
import { RechercheComponent } from './admin/recherche/recherche.component';
import { ReminderComponent } from './admin/reminder/reminder.component';
import { BuyArticleComponent } from './admin/buy-article/buy-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent,
    RechercheComponent,
    ReminderComponent,
    BuyArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
