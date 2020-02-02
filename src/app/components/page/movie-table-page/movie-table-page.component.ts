import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Movie} from "../../../models/movie.model";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-movie-table-page',
  templateUrl: './movie-table-page.component.html',
  styleUrls: ['./movie-table-page.component.css']
})
export class MovieTablePageComponent implements OnInit {

  $moviesData : Observable<Movie[]>;
  $movieSubscriber;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.$moviesData = this.movieService.getAllMovies();

    this.$movieSubscriber = this.movieService.getAllMovies().subscribe(data=> {
      console.log('Subscribe data ',data);
    });
    console.log(this.$moviesData);
  }
  ngDestroy()
  {
    this.$movieSubscriber.unsubscribe();
  }
}
