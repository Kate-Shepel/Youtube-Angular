import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchResultListComponent } from "./search-result-list.component";

describe("SearchResultListComponent", () => {
  let component: SearchResultListComponent;
  let fixture: ComponentFixture<SearchResultListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultListComponent]
    });
    fixture = TestBed.createComponent(SearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
