///<reference path="../../../../../node_modules/@angular/forms/forms.d.ts"/>
import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

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

  editForm:FormGroup

  modalDialogLabel : string = '';
  modalButtonLabel : string = '';

  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.$moviesData = this.movieService.movies$;
    this.$movieSubscriber  = this.$moviesData.subscribe(data=>{
      console.log('New movie data in table page ',data);
    })
    this.editForm = this.formBuilder.group({
      id : [''],
      name: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });

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
  get f()
  {
    return this.editForm.controls;
  }
  newMovie()
  {
    this.modalDialogLabel = 'New';
    this.modalButtonLabel = 'Save';
    this.editForm.reset();
    this.open(this.editModalDlg);
  }
  editMovie(movie)
  {
    this.modalDialogLabel = 'Edit';
    this.modalButtonLabel = 'Update';
    console.log('Edit movie ',movie);
    let model = {... movie};
    this.editForm.patchValue(model);
    this.open(this.editModalDlg);

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    var model = this.editForm.value;
    console.log('Update ',model);
    if( model.id ) //Update existing model
    {
      this.movieService.updateMovie(model);
    }
    else
    {
      //New model create
      console.log('New model ', model);
      this.movieService.createMovie(model);
    }
    this.editForm.reset();
    this.modalService.dismissAll();

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
