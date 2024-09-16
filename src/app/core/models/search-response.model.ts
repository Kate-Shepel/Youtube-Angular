import { ItemSearch, SearchItem } from "./search-item.model";

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

export interface VideoResponse <SearchItemType extends SearchItem = SearchItem> {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItemType[];
}

export interface SearchResultsResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ItemSearch[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
