import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credential';
import { BroadcastmessagePageModule } from './../pages/broadcastmessage/broadcastmessage.module';
import { LoginPageModule } from './../pages/login/login.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { ListnewchatPageModule } from './../pages/listnewchat/listnewchat.module';
import { ContactsProvider } from '../providers/contacts/contacts';
import { ContactsPageModule } from './../pages/contacts/contacts.module';
import { ContactProvider } from '../providers/contact/contact';
import { HttpClientModule } from '@angular/common/http';
import { AddcontactPageModule } from './../pages/addcontact/addcontact.module';
import "hammerjs";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [

BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    BroadcastmessagePageModule,
    LoginPageModule,
    HttpClientModule,
    ListnewchatPageModule,
    ContactsPageModule,
    RegisterPageModule,
    AddcontactPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider,
    ContactProvider
  ]
})
export class AppModule {}
