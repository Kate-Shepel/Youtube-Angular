import {
  ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output
} from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { SearchItem } from "../../models/search-item.model";
import { DataService } from "../../services/data.service";
import { generateRandomNumber } from "../../utils/random-number";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"]
})
export class SearchItemComponent implements OnInit {
  @Input() item: SearchItem | undefined;
  isFavorite$: Observable<boolean> = of(false);
  @Output() favoriteToggled = new EventEmitter<string>();

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  dislikesNumber = 0;

  ngOnInit() {
    this.dislikesNumber = generateRandomNumber(30);
    this.isFavorite$ = this.dataService.favorites$.pipe(
      map((favorites) => favorites.includes(this.item?.id || ""))
    );
  }

  toggleFavorite(): void {
    if (this.item) {
      this.favoriteToggled.emit(this.item.id);
    }
  }
}
