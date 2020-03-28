import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  username = "";
  password = "";
  login() {
    this.router.navigate(["welcome", this.username]);
  }
}
