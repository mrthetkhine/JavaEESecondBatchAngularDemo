import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {URL_HOST} from '../utils/Setting';
import {Movie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [
            new Movie('Avatar',2020),
            new Movie('Titanic',1990),
            new Movie('Forrest Gump',1990)];

  constructor(private httpClient : HttpClient) { }


  getAllMovies()
  {
    return this.httpClient.get<Movie[]>(URL_HOST+"/movies");
  }
}
