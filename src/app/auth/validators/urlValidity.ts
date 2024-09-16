import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidity(control: AbstractControl): ValidationErrors | null {
  const urlPattern = new RegExp("^(https?:\\/\\/)?"
    + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"
    + "((\\d{1,3}\\.){3}\\d{1,3}))"
    + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"
    + "(\\?[;&a-z\\d%_.~+=-]*)?"
    + "(\\#[-a-z\\d_]*)?$", "i");

  return !urlPattern.test(control.value) ? { urlValidity: "The url is invalid" } : null;
}
