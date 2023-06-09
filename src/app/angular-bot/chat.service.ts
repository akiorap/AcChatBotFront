import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BotRequest,BotResponse,ChatMessage } from './BotModels';


export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable()
export class ChatService {

  botEndpoint = environment.chatBotFunctionEndpoint;

  constructor(private http: HttpClient) { }

  //conversation = new Subject<Message[]>();

  chatHistory: ChatMessage[] = [];
  //previousMessages: ChatMessage[];
   
  getBotAnswer(area: string, msg?: string, previousMessages?: ChatMessage[] ) {
    //const userMessage = new Message('user', msg);
    //this.conversation.next([userMessage]);
    //const botMessage = new Message('bot', "yo");
    if(previousMessages)
      this.chatHistory = previousMessages;

    let headSet = {'Access-Control-Allow-Origin': '*'}
    let requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headSet), 
      //requestBody: new Httprequest
    };

    let requestBody: BotRequest = {
        Area: area,
        PreviousMessages:previousMessages
    };

    //requestBody.UserPrompt = "Hi";
    //let botResponse: BotResponse = {}; 
    //article: Article = {} as Article;
    return this.http.post<BotResponse>(this.botEndpoint,requestBody,requestOptions);

    //return botResponse;
    
  }

}
