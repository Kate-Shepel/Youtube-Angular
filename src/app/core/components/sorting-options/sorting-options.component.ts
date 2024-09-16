import { Component } from "@angular/core";

import { SortingOptionsType } from "../../models/sorting-options.model";
import { SortChangeService } from "../../services/sort-change.service";

@Component({
  selector: "app-sorting-options",
  templateUrl: "./sorting-options.component.html",
  styleUrls: ["./sorting-options.component.scss"],
})
export class SortingOptionsComponent {
  currentSortType!: string;
  isDateAsc = true;
  isCountAsc = true;
  searchTerm = "";

  constructor(private sortChangeService: SortChangeService) {}

  sortBy(str: string): void {
    this.currentSortType = str;
    if (str === SortingOptionsType.date && this.isDateAsc === true) {
      this.currentSortType = SortingOptionsType.date;
    } else if (str === SortingOptionsType.date && this.isDateAsc === false) {
      this.currentSortType = SortingOptionsType.dateDesc;
    } else if (str === SortingOptionsType.count && this.isCountAsc === true) {
      this.currentSortType = SortingOptionsType.count;
    } else if (str === SortingOptionsType.count && this.isCountAsc === false) {
      this.currentSortType = SortingOptionsType.countDesc;
    }
    this.sortChangeService.refreshShowResults(this.currentSortType);
  }

  sortByWord(): void {
    if (this.searchTerm) {
      this.sortChangeService.refreshShowResults(this.searchTerm);
    }
  }
}
