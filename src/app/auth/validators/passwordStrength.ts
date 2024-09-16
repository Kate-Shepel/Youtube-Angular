import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }

    const errors: ValidationErrors = {};
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialChar = /[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]+/.test(value);

    if (!hasUpperCase) {
      errors["uppercaseRequired"] = "Password must contain at least one uppercase letter.";
    } else if (!hasLowerCase) {
      errors["lowercaseRequired"] = "Password must contain at least one lowercase letter.";
    } else if (!hasNumeric) {
      errors["numericRequired"] = "Password must contain at least one number.";
    } else if (!hasSpecialChar) {
      errors["specialCharRequired"] = "Password must contain at least one special character like ! @ # ? ].";
    }
    return Object.keys(errors).length ? errors : null;
  };
}
