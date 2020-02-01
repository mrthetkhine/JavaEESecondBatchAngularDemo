import { Component } from '@angular/core';
import {Movie} from "./models/movie.model";
import {MovieService} from "./services/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seconddemo';
  movies: Array<Movie> ;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.movies = this.movieService.getAllMovies();
  }


  likeChangedCallBack(movie:Movie)
  {
    console.log('Like Changed ',movie);
  }
}
