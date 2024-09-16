import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Add } from "../../../store/actions/item.actions";
import { CreatedCard } from "../../../store/reducers/item.reducer";
import { dateValidity } from "../../validators/dateValidity";
import { urlValidity } from "../../validators/urlValidity";

@Component({
  selector: "app-admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.scss"],
})
export class AdminPageComponent {
  validateForm: FormGroup;
  cardCreatedMsg = false;

  constructor(
    public router: Router,
    private store: Store,
  ) {
    this.validateForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl("", [Validators.maxLength(255)]),
      img: new FormControl("", [Validators.required, urlValidity]),
      url: new FormControl("", [Validators.required, urlValidity]),
      date: new FormControl("", [Validators.required, dateValidity]),
    });
  }

  submitAdminForm(): void {
    if (this.validateForm.valid) {
      const newCard: CreatedCard = {
        ...this.validateForm.value
      };

      this.store.dispatch(Add({ payload: newCard }));

      this.cardCreatedMsg = true;
      this.validateForm.reset();
      setTimeout(() => { this.cardCreatedMsg = false; }, 3500);
    } else {
      Object.keys(this.validateForm.controls).forEach((key) => {
        const control = this.validateForm.get(key);
        if (control && control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getControl(name: string) {
    return this.validateForm.get(name);
  }

  resetForm(): void {
    this.validateForm.reset({
      title: "",
      description: "",
      img: "",
      url: "",
      date: "",
    });
  }
}
