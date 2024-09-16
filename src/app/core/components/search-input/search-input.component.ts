/* eslint-disable class-methods-use-this */
import {
  Component, EventEmitter, OnInit, Output
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter } from "rxjs";

import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit {
  public searchGroup = new FormGroup({
    searchField: new FormControl(""),
  });

  @Output() isSearch = new EventEmitter<boolean>();

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.searchGroup.get("searchField")?.valueChanges.pipe(
      filter((elem: string | null): elem is string => !!elem && elem.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((searchWords) => {
      this.youtubeService.refreshSearchData(searchWords);
    });
  }
}
