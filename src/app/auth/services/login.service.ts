/* eslint-disable class-methods-use-this */
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root"
})

export class LoginService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  isAuthorized(): boolean {
    return this.localStorageService.extractUserNameFromLocalStorage() !== null;
  }

  logout(): void {
    this.localStorageService.clearLocalStorage();
    this.router.navigate(["/auth/login"]);
  }
}
