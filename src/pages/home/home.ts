import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListnewchatPage } from './../listnewchat/listnewchat';
import { BroadcastmessagePage } from './../broadcastmessage/broadcastmessage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  newMessagepage(){
    this.navCtrl.push(ListnewchatPage)
  }
  newBroadcastmessagepage(){
    this.navCtrl.push(BroadcastmessagePage)
  }
}
