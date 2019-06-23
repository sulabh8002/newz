import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsSourcesComponent } from './news-sources/news-sources.component';
import { HttpClientModule } from '@angular/common/http';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { NewsCategoryComponent } from './news-category/news-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsSourcesComponent,
    TopHeadlinesComponent,
    NewsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
