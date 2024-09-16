import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { SearchItem } from "./core/models/search-item.model";
import { SearchResponse } from "./core/models/search-response.model";
import { DataService } from "./core/services/data.service";
import { ShowResultsService } from "./core/services/show-results.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DataService],
})
export class AppComponent {
  title = "youtube-client";
  displaySorting$: Observable<boolean> = this.showResults.showResults$;
  fullResponse: SearchResponse | null = null;
  cardData: SearchItem[] = [];
  displayResults = false;
  sortChange = "";

  constructor(private showResults: ShowResultsService) {}

  toggleSorting(show: boolean): void {
    this.showResults.refreshShowResults(show);
  }
}
