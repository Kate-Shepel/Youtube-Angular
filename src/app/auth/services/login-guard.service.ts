import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";

import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class LoginGuardService {
  constructor(
    public login: LoginService,
    public router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (!this.login.isAuthorized()) {
      console.log("не авторизирован");
      return this.router.createUrlTree(["/auth/login"]);
    }
    console.log("AUTHORIZED");
    return true;
  }
}
