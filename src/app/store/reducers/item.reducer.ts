import { Action, createReducer, on } from "@ngrx/store";

import { Add } from "../actions/item.actions";

export interface CreatedCard {
  title: string;
  description: string;
  img: string;
  url: string;
  date: string;
}

export const createdCardKey = "createdCard";
export const createdCardsFeatureKey = "createdCardsFeature";

export interface CreatedCardState {
  [createdCardKey]: CreatedCard[],
}

export interface AppState {
  [createdCardsFeatureKey]: CreatedCardState,
}

const initialState: CreatedCardState = {
  [createdCardKey]: [],
};

export const cardsReducer = createReducer(
  initialState,
  on(Add, (state, { payload }): CreatedCardState => ({
    ...state,
    createdCard: [...state.createdCard, payload],
  })),
);

export function createdCardsReducer(state: CreatedCardState | undefined, action: Action) {
  return cardsReducer(state, action);
}
