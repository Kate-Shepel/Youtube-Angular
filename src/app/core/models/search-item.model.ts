export interface SearchItem {
  kind: Kind;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
  isFavorite?: boolean;
}

export interface ItemSearch {
  kind: Kind;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

export enum Kind {
  YoutubeVideo = "youtube#video",
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultLanguage?: Language;
  defaultAudioLanguage: Language;
}

export interface Localized {
  title: string;
  description: string;
}

export enum Language {
  En = "en",
  Ru = "ru",
  EnUS = "en-US"
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
