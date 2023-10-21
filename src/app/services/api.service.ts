import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  createContact(contactData:any):Observable<any>{
    return this.http.post('https://contact-app-3lkl.onrender.com/contact/create',contactData)
  }

  getContacts():Observable<any>{
    return this.http.get('https://contact-app-3lkl.onrender.com/contacts')
  }

  getContactById(id:any):Observable<any>{
    return this.http.get(`https://contact-app-3lkl.onrender.com/contacts/${id}`)
  }

  updateContactbyId(id:any,contact:any):Observable<any>{
    return this.http.put(`https://contact-app-3lkl.onrender.com/contact/update/${id}`,contact)
  }

  deleteContact(id:any){
    return this.http.delete(`https://contact-app-3lkl.onrender.com/contact/delete/${id}`)
  }
}
