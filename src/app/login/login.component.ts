import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService
  ) {}

  ngOnInit() {}

  username = "";
  password = "";
  invalid = false;
  login() {
    if (
      this.hardcodedAuthentication.authentication(this.username, this.password)
    ) {
      sessionStorage.setItem("authenticationUsername", this.username);
      this.router.navigate(["welcome", this.username]);
      this.invalid = true;
    }
    this.invalid = false;
  }
}
