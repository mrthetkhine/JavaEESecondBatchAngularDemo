import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {

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
