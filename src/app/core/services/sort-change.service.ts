import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class SortChangeService {
  private sortChange = new BehaviorSubject("");
  results = this.sortChange.asObservable();

  refreshShowResults(sortChange: string): void {
    this.sortChange.next(sortChange);
  }
}
