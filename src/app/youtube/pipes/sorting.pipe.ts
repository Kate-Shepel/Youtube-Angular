/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from "@angular/core";

import { SearchItem } from "../../core/models/search-item.model";

@Pipe({
  name: "sorting"
})
export class SortingPipe implements PipeTransform {
  transform(resultsArr: SearchItem[] | undefined, args?: string): SearchItem[] | undefined {
    if (!resultsArr) {
      return undefined;
    }

    if (!args) {
      return resultsArr;
    }

    switch (args) {
      case "date":
        return SortingPipe.sortByDate(resultsArr, true);
      case "dateDesc":
        return SortingPipe.sortByDate(resultsArr, false);
      case "count":
        return SortingPipe.sortByCount(resultsArr, true);
      case "countDesc":
        return SortingPipe.sortByCount(resultsArr, false);
      default:
        return resultsArr.filter((item) => item.snippet.tags.join(" ").includes(args));
    }
  }

  private static sortByDate(resultsArr: SearchItem[], ascending = true): SearchItem[] {
    return resultsArr.sort((a: SearchItem, b: SearchItem) => {
      const aTime = new Date(a.snippet.publishedAt).getTime();
      const bTime = new Date(b.snippet.publishedAt).getTime();
      return ascending ? aTime - bTime : bTime - aTime;
    });
  }

  private static sortByCount(resultsArr: SearchItem[], ascending = true): SearchItem[] {
    return resultsArr.sort((a: SearchItem, b: SearchItem) => {
      const aCount = +a.statistics.viewCount;
      const bCount = +b.statistics.viewCount;
      return ascending ? aCount - bCount : bCount - aCount;
    });
  }
}
