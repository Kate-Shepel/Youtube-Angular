import { createAction, props } from "@ngrx/store";

export interface CreatedCard {
  title: string;
  description: string;
  img: string;
  url: string;
  date: string;
}

export const Add = createAction("[Created card] Add", props<{
  payload: CreatedCard;
}>());
