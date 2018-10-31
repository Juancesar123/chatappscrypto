import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { ContactProvider } from './../../providers/contact/contact';
  
@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
  IonicPageModule.forChild(ContactsPage),
  ]
})
export class ContactsPageModule {}
