import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { LoginService } from "src/app/auth/services/login.service";

@Component({
  selector: "app-login-info",
  templateUrl: "./login-info.component.html",
  styleUrls: ["./login-info.component.scss"]
})
export class LoginInfoComponent implements OnInit {
  user = "";

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.localStorageService.userName.subscribe((user) => { this.user = user; });
    this.localStorageService.extractUserNameFromLocalStorage();
  }

  onLogOut() {
    this.loginService.logout();
  }
}
