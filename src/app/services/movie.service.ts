import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {URL_HOST} from '../utils/Setting';
import {Movie} from "../models/movie.model";
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies$ = new BehaviorSubject<Movie[]>([]);

  movies : Movie[] = [];

  constructor(private httpClient : HttpClient) { }


  loadAllMovies()
  {
    this.httpClient.get<Movie[]>(URL_HOST+"/movies").subscribe(data=>{
      this.movies = data;
      this.movies$.next(this.movies);
    });
  }
  updateMovie(movie:Movie)
  {
    this.httpClient.put<Movie>(URL_HOST+"/movies/"+movie.id,movie).subscribe(data=>{
      console.log('Update movie response ',data);
      this.movies = this.movies.map(mov => mov.id != movie.id? mov : data);
      this.movies$.next(this.movies);
    });
  }
  deleteMovie(movie:Movie)
  {
    this.httpClient.delete(URL_HOST+"/movies/"+movie.id).subscribe(data=>{
      console.log('Delete movie response ',data);
      this.movies = this.movies.filter(mov => mov.id != movie.id);
      this.movies$.next(this.movies);
    });
  }
}
