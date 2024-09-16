import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShowResultsService {
  private showResultsSource = new BehaviorSubject(false);

  readonly showResults$ = this.showResultsSource.asObservable();

  refreshShowResults(showResults: boolean): void {
    this.showResultsSource.next(showResults);
  }
}
