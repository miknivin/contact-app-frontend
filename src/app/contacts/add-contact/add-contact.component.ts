import { Component, EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  successMessage:boolean=false
  errorMessage:boolean=false
  alert:boolean=false
  submitted:boolean=false
  form: FormGroup;
  constructor(private api:ApiService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]], // Name Field with validation
      email: ['', [Validators.required, Validators.email]], // Email Field with validation
      phone: ['', [Validators.pattern('[0-9]*'),Validators.required]], // Phone Field with validation
      message: [''] // Message Field
    });
  }

  contactSubmit(){
    if(this.form.valid){
      const formData = this.form.value

      this.api.createContact(formData).subscribe((result)=>{
        alert('Data Successfuly Captured')
        console.log(formData);
      },
      (error)=>{
        console.error(error);
        alert('Error posting data')
      }
      )
    }
    else{
      alert('Form is Invalid')
    }
  }
}
