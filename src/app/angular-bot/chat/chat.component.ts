import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Message, ChatService } from '../chat.service'
import { BotResponse, ChatMessage } from '../BotModels';

@Component({
  selector: 'lazaros-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  userPrompt: string = "";
  botResponse: BotResponse = {} ; // = this.chatService.getBotAnswer("login");
  //botResponse = this.chatService.getBotAnswer("login");
  area = "login";
  messages: ChatMessage[] = [];
  
  constructor(public chatService: ChatService) { }
  
  @ViewChild('chatListContainer') list?: ElementRef<HTMLDivElement>;

  ngOnInit() {
    //console.log("bonjour");
    this.chatService.getBotAnswer(this.area).subscribe(data => {
      console.log("bonjour", data);
      this.botResponse = data;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({top: maxScroll, behavior: 'smooth'});
  }

  sendMessage() {
    console.log("Message: " );
    this.chatService.getBotAnswer(this.area);
    this.userPrompt = '';
  }
  sendMessage2() {
    console.log("Message: " + this.userPrompt)
    
  }
  send() {
    console.log("Sending Message: " + this.userPrompt);

    this.chatService.getBotAnswer(this.area,this.userPrompt, this.botResponse.previousMessages).subscribe(data => {
      this.botResponse = data;
    });
 
    this.userPrompt = ""
    this.scrollToBottom()
  }
  setArea() {
    //this.area = val;
    this.botResponse.previousMessages = [];
    console.log(this.area);

    this.chatService.getBotAnswer(this.area,this.userPrompt, this.botResponse.previousMessages).subscribe(data => {
      this.botResponse = data;
    });
    
  }

  clearConversation() {}

}
