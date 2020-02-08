import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

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

  @ViewChild('mymodal',{ static: false }) editModalDlg:any;
  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal,
              private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.$moviesData = this.movieService.movies$;
    this.$movieSubscriber  = this.$moviesData.subscribe(data=>{
      console.log('New movie data in table page ',data);
    })

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('Modal Close');
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log('Dismissed reason ',reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  editMovie(movie)
  {
    console.log('Edit movie ',movie);
    this.open(this.editModalDlg);

  }
  delete(movie)
  {
    console.log('Delete movie ',movie);
    this.movieService.deleteMovie(movie);
  }
  ngDestroy()
  {
    console.log('Table page destroy');
    this.$movieSubscriber.unsubscribe();
  }
}
