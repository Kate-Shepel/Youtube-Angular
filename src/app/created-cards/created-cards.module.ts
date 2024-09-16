import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { createdCardsFeatureKey, createdCardsReducer } from "../store/reducers/item.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(createdCardsFeatureKey, createdCardsReducer),
  ],
})
export class CreatedCardsModule {}
