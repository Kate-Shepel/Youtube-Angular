import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions) { }
}
