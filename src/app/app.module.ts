import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AngularBotModule } from './angular-bot/angular-bot.module'
import { ChatComponent } from './angular-bot/chat/chat.component';
import { AppComponent } from './app.component';
import { ChatService } from './angular-bot/chat.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

