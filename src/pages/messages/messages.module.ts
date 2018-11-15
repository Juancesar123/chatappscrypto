import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import { ChatMessage } from '../../providers/chat/chat';
import { EmojiProvider } from '../../providers/emoji/emoji';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MessagesPage,
    
  ],
  exports: [
    MessagesPage
  ],
  providers: [
    ChatMessage,
    EmojiProvider
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    ComponentsModule,
    PipesModule
  ],
})
export class MessagesPageModule {}
