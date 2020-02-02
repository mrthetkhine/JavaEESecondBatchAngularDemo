import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListPageComponent} from "./components/page/movie-list-page/movie-list-page.component";
import {MovieTablePageComponent} from "./components/page/movie-table-page/movie-table-page.component";


const routes: Routes = [
  { path: 'movie_list', component: MovieListPageComponent },
  { path: 'movie_table', component: MovieTablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
