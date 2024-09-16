import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  map, mergeMap, Observable, Subject
} from "rxjs";

import { MAX_ITEM_NUMBER } from "../keys/api-keys";
import { ItemSearch, SearchItem } from "../models/search-item.model";
import { SearchResultsResponse, VideoResponse } from "../models/search-response.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  cardsInfo: SearchItem[] = [];
  cardsInfoSubject = new Subject<SearchItem[]>();

  itemsArr = this.cardsInfoSubject.asObservable();
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  refreshShowResults(showResults: SearchItem[]): void {
    this.cardsInfoSubject.next(showResults);
  }

  constructor(private http: HttpClient) {}

  getInfo(data: string): Observable<VideoResponse> {
    let params = new HttpParams()
      .set("type", "video")
      .set("maxResults", MAX_ITEM_NUMBER.toString())
      .set("q", data);

    return this.http.get<SearchResultsResponse>("search", { params }).pipe(
      mergeMap((response: SearchResultsResponse) => {
        const idString: string = response.items.map((item: ItemSearch) => item.id.videoId).join(",");
        params = new HttpParams().set("id", idString).set("part", "snippet,statistics");
        return this.http.get<VideoResponse>("videos", { params });
      })
    );
  }

  getVideoInfo(data: string): Observable<SearchItem> {
    const params = new HttpParams()
      .set("id", data)
      .set("part", "snippet,statistics");

    return this.http.get<VideoResponse>("videos", { params }).pipe(
      map((response) => response.items[0])
    );
  }

  toggleFavorite(videoId: string): void {
    const currentFavorites = this.favoritesSubject.value;
    if (currentFavorites.includes(videoId)) {
      this.favoritesSubject.next(currentFavorites.filter((id) => id !== videoId));
    } else {
      this.favoritesSubject.next([...currentFavorites, videoId]);
    }
  }
}
