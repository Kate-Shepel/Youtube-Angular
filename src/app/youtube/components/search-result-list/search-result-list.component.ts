import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { SearchItem } from "../../../core/models/search-item.model";
import { DataService } from "../../../core/services/data.service";
import { SortChangeService } from "../../../core/services/sort-change.service";
import { YoutubeService } from "../../../core/services/youtube.service";
import { CreatedCard } from "../../../store/reducers/item.reducer";
import { selectCreatedCards } from "../../../store/selectors/item.selectors";

@Component({
  selector: "app-search-result-list",
  templateUrl: "./search-result-list.component.html",
  styleUrls: ["./search-result-list.component.scss"]
})
export class SearchResultListComponent implements OnInit {
  cardData$: Observable<SearchItem[]> = of([]);
  sortChange: string | undefined;
  createdCards$: Observable<CreatedCard[]> = of([]);

  constructor(
    private sortChangeService: SortChangeService,
    private dataService: DataService,
    private youtubeService: YoutubeService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.createdCards$ = this.store.select(selectCreatedCards);
    this.cardData$ = this.dataService.itemsArr;

    this.youtubeService.turnOnSearch.pipe(
      switchMap((resultInfo) => this.dataService.getInfo(resultInfo)),
    ).subscribe((elem) => {
      this.dataService.refreshShowResults(elem.items);
    });

    this.sortChangeService.results.subscribe((info) => { this.sortChange = info; });
  }

  handleFavoriteToggle(videoId: string): void {
    this.dataService.toggleFavorite(videoId);
  }
}
