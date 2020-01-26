import { Component } from '@angular/core';
import {Movie} from "./models/movie.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seconddemo';

  movies: Array<Movie> = [new Movie('Avatar',2020), new Movie('Titanic',1990)];
}
