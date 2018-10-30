import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './contacts.model';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

import { ContactsProvider } from './../../providers/contacts/contacts';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
contactlist:Observable<Item[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,private contactlistService:ContactsProvider) {
    this.contactlist = this.contactlistService.getContactlist().snapshotChanges()//db list
    .pipe(map(
      changes =>{
        return changes.map(c=>({
          key:c.payload.key, ...c.payload.val()
          
        }))
      }
    ))
    console.log(this.contactlist);
  }
  item:Item = {
    name:'',
    phonenumber:undefined,
    gambar:undefined
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
  addItem(){
    let data = {
      name:'juan',
      phonenumber:'08101801810',
      gambar:'nuall'
    }
    this.contactlistService.addItem(data).then(ref =>{
      console.log(ref.key)
    })

  }

}
