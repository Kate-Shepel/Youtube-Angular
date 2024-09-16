import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreatedCardMsgComponent } from "./created-card-msg.component";

describe("CreatedCardMsgComponent", () => {
  let component: CreatedCardMsgComponent;
  let fixture: ComponentFixture<CreatedCardMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedCardMsgComponent]
    });
    fixture = TestBed.createComponent(CreatedCardMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
