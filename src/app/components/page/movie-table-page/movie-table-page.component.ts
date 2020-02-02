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

  $moviesData ;
  $movieSubscriber;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.$moviesData = this.movieService.movies$;
    this.$movieSubscriber  = this.$moviesData.subscribe(data=>{
      console.log('New movie data in table page ',data);
    })

  }
  ngDestroy()
  {
    console.log('Table page destroy');
    this.$movieSubscriber.unsubscribe();
  }
}
