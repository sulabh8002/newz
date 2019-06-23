import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsSourcesComponent } from './news-sources/news-sources.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { NewsCategoryComponent } from './news-category/news-category.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'sources/all',
  pathMatch: 'full'
},
  {
  path: 'sources/:cat',
  component: NewsSourcesComponent
},
{
  path: 'headlines/:source/:cat',
  component: TopHeadlinesComponent
},
{
  path: 'newscat/:catsrc',
  component: NewsCategoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
