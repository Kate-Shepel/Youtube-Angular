import { AbstractControl, ValidationErrors } from "@angular/forms";

export function dateValidity(control: AbstractControl): ValidationErrors | null {
  const currentDate = new Date();
  const inputDate = new Date(control.value);
  return inputDate > currentDate ? { dateValidity: "The date is invalid" } : null;
}
