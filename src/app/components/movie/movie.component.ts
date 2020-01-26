import { Component, OnInit,Input } from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie:Movie ;

  actors : Array<string> = ['Actor One ','Actor Two ','Actor Three'];
  constructor() { }

  ngOnInit() {
  }

  changeLike()
  {
    this.movie.liked = ! this.movie.liked;
  }
}
