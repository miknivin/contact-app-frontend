import { Component, OnInit } from '@angular/core';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:any[]=[]
  products:any[]=[]
  constructor(public dialog: MatDialog, private api:ApiService) {}
  ngOnInit(): void {
    this.fetchContacts()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: 'auto', // You can set the width and other properties
    });
  }

  fetchContacts(){
    this.api.getContacts().subscribe((result)=>{
      this.contacts=result.contacts
      console.log('Successfully fetched data');
      console.log(this.contacts);

    },
    (error)=>{
      console.error(error);
      alert('Error Fetching contacts')
    })
  }


  deleteContact(id:any){
    confirm("Are you sure")
    if(confirm()){
      this.api.deleteContact(id).subscribe((res)=>{
        console.log(res);
        alert(`deleted`);
        this.fetchContacts()
      },
      (error)=>{
        alert('Error deleting')
        console.error(error);

      })
    }

  }
}
