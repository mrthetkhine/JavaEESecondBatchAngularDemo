import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Movie} from "../../models/movie.model";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie:Movie ;
  @Output() likeChanged = new EventEmitter<Movie>();

  actors : Array<string> = ['Actor One ','Actor Two ','Actor Three'];

  constructor(private loggerService : LoggerService) {
    console.log('Movie constructor')
  }

  ngOnChanges()
  {
    console.log('Run ngOnChanges');
  }
  ngOnInit() {
    console.log('Run ngOnInit');
  }
  ngOnDestroy()
  {
    console.log('Run ngOnDestroy');
  }
  changeLike()
  {
    this.movie.liked = ! this.movie.liked;
    this.likeChanged.emit(this.movie);

    this.loggerService.log("Movie liked ",this.movie)
  }
}
