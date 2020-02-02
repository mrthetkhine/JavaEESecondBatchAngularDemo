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
      this.movies$.next(data);
    });
  }
}
