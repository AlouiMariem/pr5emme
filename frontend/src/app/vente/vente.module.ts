import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteRoutingModule } from './vente-routing.module';
import { NewArticleComponent } from './new-article/new-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';


@NgModule({
  declarations: [
    NewArticleComponent,
    UpdateArticleComponent,
    ArticleDetailsComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    VenteRoutingModule
  ]
})
export class VenteModule { }
