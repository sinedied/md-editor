import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, tap, switchMap } from "rxjs/operators";

import * as editor from "../actions/editor.actions";

const CONTENT_KEY = "content";

@Injectable()
export class EditorEffects {
  @Effect()
  $load = this.actions.ofType<editor.LoadContent>(editor.LOAD_CONTENT).pipe(
    switchMap(() => {
      let action: Action;
      const savedContent = localStorage.getItem(CONTENT_KEY);
      if (savedContent) {
        action = new editor.SetContent(savedContent);
      } else {
        action = new editor.ResetContent();
      }
      return of(action);
    })
  );

  @Effect({ dispatch: false })
  $save = this.actions.ofType<editor.SetContent>(editor.SET_CONTENT).pipe(
    map(action => action.content),
    tap(content => {
      localStorage.setItem(CONTENT_KEY, content);
    })
  );

  constructor(private actions: Actions) {}
}
