import { Component, EventEmitter, Output } from "@angular/core";
import { ShowResultsService } from "src/app/core/services/show-results.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  displaySorting = false;

  @Output() changed = new EventEmitter<boolean>();

  constructor(private showResults: ShowResultsService) { }

  change(displaySorting: boolean): void {
    this.changed.emit(displaySorting);
  }

  handleSearch(search: boolean): void {
    this.showResults.refreshShowResults(search);
  }
}
