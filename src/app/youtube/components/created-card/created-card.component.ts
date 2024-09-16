import { Component, Input } from "@angular/core";
import { CreatedCard } from "src/app/store/reducers/item.reducer";

@Component({
  selector: "app-created-card",
  templateUrl: "./created-card.component.html",
  styleUrls: ["./created-card.component.scss"],
})
export class CreatedCardComponent {
  private privateCreatedData?: CreatedCard;

  @Input()
  set createdData(value: CreatedCard) {
    if (!value) {
      throw new Error("createdData is required");
    }
    this.privateCreatedData = value;
  }

  get createdData(): CreatedCard {
    if (!this.privateCreatedData) {
      throw new Error("createdData is not set yet");
    }
    return this.privateCreatedData;
  }
}
