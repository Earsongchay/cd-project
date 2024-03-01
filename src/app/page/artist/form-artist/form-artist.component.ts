import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ArtistService} from "../service/artist.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.scss']
})
export class FormArtistComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(private artistService:ArtistService,private dialogRef:MatDialogRef<FormArtistComponent>,private loading:NgxSpinnerService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      groupName: new FormControl(''),
    })
  }

  addNewArtist() {
    if (this.formGroup.valid)
    this.loading.show('loading')
    this.artistService.addArtist({...this.formGroup.value}).subscribe(
      {
        next:()=>{
          this.dialogRef.close(true)
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
