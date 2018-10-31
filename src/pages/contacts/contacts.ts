import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Item } from './contacts.model';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

import { ContactsProvider } from './../../providers/contacts/contacts';
import { AddcontactPage } from './../addcontact/addcontact';

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
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private contactlistService:ContactsProvider,
    public toastCtrl: ToastController
  ) {
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
  clickable(){
   
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Your Action',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            const toast = this.toastCtrl.create({
              message: 'Users Deleted Successfully',
              duration: 3000
            });
            toast.present()
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
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
  addcontacts(){
    this.navCtrl.push(AddcontactPage)
  }
}
