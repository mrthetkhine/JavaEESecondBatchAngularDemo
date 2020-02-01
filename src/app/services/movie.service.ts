import { Injectable } from '@angular/core';
import {Movie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [
            new Movie('Avatar',2020),
            new Movie('Titanic',1990),
            new Movie('Forrest Gump',1990)];

  constructor() { }

  getAllMovies()
  {
    return this.movies;
  }
}
