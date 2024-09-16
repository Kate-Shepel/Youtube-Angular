import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { SearchItem } from "../models/search-item.model";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private searchInput = new BehaviorSubject<string>("");
  turnOnSearch = this.searchInput.asObservable();

  extractById(cardData: SearchItem[], videoId: string) {
    const result = cardData.find((elem: SearchItem) => elem.id === videoId);

    return result;
  }

  refreshSearchData(input: string): void {
    this.searchInput.next(input);
  }
}
