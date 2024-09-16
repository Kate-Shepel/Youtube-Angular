import { createFeatureSelector, createSelector } from "@ngrx/store";

import { createdCardKey, createdCardsFeatureKey, CreatedCardState } from "../reducers/item.reducer";

const selectCreatedCardFeature = createFeatureSelector<CreatedCardState>(createdCardsFeatureKey);

export const selectCreatedCards = createSelector(
  selectCreatedCardFeature,
  (state) => state[createdCardKey],
);
