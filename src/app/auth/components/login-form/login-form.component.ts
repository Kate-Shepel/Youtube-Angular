import { Component, OnInit } from "@angular/core";
import {
  FormControl, FormGroup, Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { LocalStorageService } from "../../services/local-storage.service";
import { passwordStrengthValidator } from "../../validators/passwordStrength";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})

export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      user: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), passwordStrengthValidator()]),
      remember: new FormControl(true),
    });
  }

  submitLoginForm(): void {
    if (this.validateForm.valid) {
      this.localStorageService.addUserNametoLocalStorage(this.validateForm.value.user);
      this.localStorageService.addTokentoLokalStorage();
      this.localStorageService.updateUsers(this.validateForm.value.user);
      this.router.navigate(["/"]);
    } else {
      this.validateForm?.markAllAsTouched();
    }
  }

  get userEmail() {
    return this.validateForm.get("user");
  }

  get userPassword() {
    return this.validateForm.get("password");
  }
}
