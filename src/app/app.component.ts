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

  $moviesData : Observable<Movie[]>;
  $movieSubscriber;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.movieService.loadAllMovies();

    this.$movieSubscriber = this.movieService.movies$.subscribe(data=> {
      console.log('Subscribe data ',data);
    });
    console.log(this.$moviesData);
  }
  ngDestroy()
  {
    this.$movieSubscriber.unsubscribe();
  }

  likeChangedCallBack(movie:Movie)
  {
    console.log('Like Changed ',movie);
  }
}
