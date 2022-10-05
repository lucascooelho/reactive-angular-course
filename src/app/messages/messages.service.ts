import { filter } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MessagesService {
  private subject = new BehaviorSubject<string[]>([]);

  erros$: Observable<string[]> = this.subject.asObservable()
                    .pipe(filter(messages => messages && messages.length > 0));

  showErros(...erros: string[]) {
    this.subject.next(erros);
  }
}
