import { User } from "./../model/user";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthStore {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  login(email: string, password: string): Observable<User> {
    return this.user$;
  }

  logout() {}
}
