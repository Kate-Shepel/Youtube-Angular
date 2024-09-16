import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { generateRandomNumber } from "src/app/core/utils/random-number";

import { SearchItem } from "../../../core/models/search-item.model";
import { DataService } from "../../../core/services/data.service";

@Component({
  selector: "app-detailed-info-page",
  templateUrl: "./detailed-info-page.component.html",
  styleUrls: ["./detailed-info-page.component.scss"]
})
export class DetailedInfoPageComponent {
  item$!: Observable<SearchItem | undefined>;
  isFavorite$: Observable<boolean>;
  dislikesNumber = 0;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.item$ = this.activatedRoute.queryParams.pipe(
      filter((params) => !!params["id"]),
      switchMap((params) => {
        const itemId = params["id"];
        return this.dataService.getVideoInfo(itemId);
      })
    );

    this.isFavorite$ = this.item$.pipe(
      switchMap((item) => this.dataService.favorites$.pipe(
        map((favorites) => (item ? favorites.includes(item.id) : false))
      ))
    );

    this.dislikesNumber = generateRandomNumber(30);
  }

  toggleFavorite(): void {
    this.item$.subscribe((item) => {
      if (item) {
        this.dataService.toggleFavorite(item.id);
      }
    });
  }
}
