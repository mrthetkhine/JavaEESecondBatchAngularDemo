import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie:Movie ;
  @Output() likeChanged = new EventEmitter<Movie>();

  actors : Array<string> = ['Actor One ','Actor Two ','Actor Three'];
  constructor() { }

  ngOnInit() {
  }

  changeLike()
  {
    this.movie.liked = ! this.movie.liked;
    this.likeChanged.emit(this.movie);
  }
}
