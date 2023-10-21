import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

import { AddContactComponent } from './contacts/add-contact/add-contact.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'contacts',
  pathMatch:'full'
},
{
  path:'contacts',
  component:ContactsComponent,
},
{
  path:'add-contacts',
  component:AddContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
