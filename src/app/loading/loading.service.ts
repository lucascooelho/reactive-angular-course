import { concatMap, tap, finalize } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();  

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    // create a default observable just in order to create a observable chain.
    return of(null).pipe(
      // use tap to side effect, turning on the loading indiciator
      tap(() => this.loadingOn()),
      // switch to output the values emitted by input observable
      concatMap(() => obs$),
      // once it stops emitting values and completes or fails, finilize and turn off
      finalize(() => this.loadingOff())
    );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
