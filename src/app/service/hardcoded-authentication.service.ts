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
}
