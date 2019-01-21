import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import {
  LoadContent,
  SetContent,
  ResetContent
} from "./actions/editor.actions";
import { EditorState, getContent, getStats } from "./reducers/editor.reducer";
import { Stats } from "./stats";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  content$: Observable<string>;
  stats$: Observable<Stats>;

  constructor(private store: Store<EditorState>) {
    this.content$ = this.store.select(getContent);
    this.stats$ = this.store.select(getStats);
    this.store.dispatch(new LoadContent());
  }

  onContentChanged(content: string) {
    this.store.dispatch(new SetContent(content));
  }

  onReset() {
    this.store.dispatch(new ResetContent());
  }
}
