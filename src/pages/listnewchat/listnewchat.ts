import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../contacts/contacts.model';
import { Observable } from 'rxjs-compat';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { map } from 'rxjs/operators';
import { MessagesPage } from '../messages/messages';

/**
 * Generated class for the ListnewchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listnewchat',
  templateUrl: 'listnewchat.html',
})
export class ListnewchatPage {
  contactlist:Observable<Item[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactservice:ContactsProvider) {
    this.contactlist = this.contactservice.getContactlist().snapshotChanges()//db list
    .pipe(map(
      changes =>{
        return changes.map(c=>({
          key:c.payload.key, ...c.payload.val()
          
        }))
      }
    ))
    console.log(this.contactlist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListnewchatPage');
  }
  clickable(){
    this.navCtrl.push(MessagesPage)
  }
}
