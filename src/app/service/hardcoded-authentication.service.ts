import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthenticationService {
  constructor() {}

  authentication(user, password) {
    if (user === "amar" && password === "amar") return true;
    return false;
  }
  isUserLogedIn() {
    let user = sessionStorage.getItem("authenticationUsername");
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem("authenticationUsername");
  }
}
