import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../pages/contacts/contacts.model';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {
  private listcontactRef = this.db.list<Item>('contacts-list') 
  constructor(public http: HttpClient,private db:AngularFireDatabase) {
    console.log('Hello ContactsProvider Provider');
  }
  getContactlist(){
    return this.listcontactRef;
  }
  addItem(item:Item){
    return this.listcontactRef.push(item)
  }
}
