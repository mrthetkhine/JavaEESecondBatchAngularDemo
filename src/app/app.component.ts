import { Component } from '@angular/core';
import {Movie} from "./models/movie.model";
import {MovieService} from "./services/movie.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seconddemo';
  movies: Array<Movie> ;

  moviesData : Observable<Movie[]>;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.moviesData = this.movieService.getAllMovies();
    console.log(this.moviesData);
  }


  likeChangedCallBack(movie:Movie)
  {
    console.log('Like Changed ',movie);
  }
}
