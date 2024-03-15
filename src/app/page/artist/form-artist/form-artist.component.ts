import {Component, Inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ArtistService} from "../service/artist.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.scss']
})
export class FormArtistComponent implements OnInit{
  formGroup!: FormGroup;
  image='';

  constructor(
    private artistService:ArtistService,
    private dialogRef:MatDialogRef<FormArtistComponent>,
    private loading:NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      akaName: new FormControl('',[Validators.required]),
      socialMedia: new FormControl(''),
      dateOfBirth: new FormControl(new Date()),
      description: new FormControl(''),
      fileName: new FormControl('')
    })

    if (this.data){
      this.formGroup.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        akaName: this.data.akaName,
        socialMedia: this.data.socialMedia,
        dateOfBirth: this.data.dateOfBirth,
        description: this.data.description,
        fileName: this.data.fileName,
      })
    }
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

  modifyArtist() {
    if (this.formGroup.valid)
      this.loading.show('loading')
    this.artistService.updateArtist(this.data.id,{...this.formGroup.value}).subscribe(
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

  uploadImage(event:any){
    this.loading.show('loading')
    this.artistService.uploadImage(event).subscribe({
      next: data=>{
        this.formGroup.get('fileName').setValue(data);

        console.log(this.formGroup)
        this.image=data
        this.loading.hide('loading')
      },
      error:err=>{
        console.log(err)
        this.loading.hide('loading')
      }
    })
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
