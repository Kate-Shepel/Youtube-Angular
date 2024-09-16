/* eslint-disable class-methods-use-this */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { createRandomNumber } from "../models/random-number";
import { TOKEN_OPTIONS } from "../models/tokens-to-choose";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  public tokens = TOKEN_OPTIONS;
  private user = new BehaviorSubject("");
  public userName = this.user.asObservable();

  addTokentoLokalStorage(): void {
    localStorage.setItem("token", this.tokens[this.createRandomIndex()]);
  }

  createRandomIndex(): number {
    return createRandomNumber(this.tokens.length - 1);
  }

  addUserNametoLocalStorage(userName: string) {
    localStorage.setItem("userName", userName);
  }

  updateUsers(user: string): void {
    this.user.next(user);
  }

  extractUserNameFromLocalStorage(): string | null {
    const userName = localStorage.getItem("userName");
    if (userName) this.updateUsers(userName);
    return userName;
  }

  clearLocalStorage() {
    localStorage.clear();
    this.updateUsers("");
  }
}
