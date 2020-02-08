import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListPageComponent } from './components/page/movie-list-page/movie-list-page.component';
import { MovieTablePageComponent } from './components/page/movie-table-page/movie-table-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListPageComponent,
    MovieTablePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
