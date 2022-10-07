import { AuthStore } from './services/auth.store';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthStore) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
