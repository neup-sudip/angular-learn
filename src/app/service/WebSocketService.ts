import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client: Client;
  private subject = new Subject<string>();

  constructor() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8081/ws',
    //   debug: function (str) {
    //     console.log(str);
    //   },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.client.onStompError = function (frame) {
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    };

    this.client.onConnect = () => {
      this.client.subscribe('/topic/authenticate', (message: Message) => {
        this.subject.next(message.body);
      });
    };

    this.client.activate();
  }

  public getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
