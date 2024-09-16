import { Component, OnInit } from "@angular/core";

import { SearchItem } from "../../../core/models/search-item.model";
import { VideoResponse } from "../../../core/models/search-response.model";
import { DataService } from "../../../core/services/data.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
  providers: [DataService],
})
export class MainPageComponent implements OnInit {
  title = "youtube-client";
  displaySorting = false;
  fullResponse: VideoResponse | null = null;
  cardData: SearchItem[] = [];
  sortChange = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.itemsArr.subscribe((item: SearchItem[]) => { this.cardData = item; });
  }

  toggleSorting(show: boolean): void {
    this.displaySorting = show;
  }

  onChanged(string: string): void {
    this.sortChange = string;
  }
}
