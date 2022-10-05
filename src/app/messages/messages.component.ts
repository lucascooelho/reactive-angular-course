import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  showMessages = false;

  errors$: Observable<string[]>;

  constructor(public messagesService: MessagesService) {
    console.log("created messages component...");
  }

  ngOnInit() {
    this.errors$ = this.messagesService.erros$
      .pipe(tap(() => this.showMessages = true));
  }

  onClose() {
    this.showMessages = false;
  }
}
