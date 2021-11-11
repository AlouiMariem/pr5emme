import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [  {path: 'articles', component: ArticleListComponent},
{path: 'create-article', component: NewArticleComponent},
{path: '', redirectTo: 'articles', pathMatch: 'full'},
{path: 'update-article/:id', component: UpdateArticleComponent},
{path: 'article-details/:id', component: ArticleDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
