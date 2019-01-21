import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs/Observable";

import { LoadContent, ResetContent, SetContent } from "./editor.actions";
import { EditorState } from "./editor.state";
import { Stats } from "./stats";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Select(EditorState.content) content$: Observable<string>;
  @Select(EditorState.stats) stats$: Observable<Stats>;

  constructor(private store: Store) {
    this.store.dispatch(new LoadContent());
  }

  onContentChanged(content: string) {
    this.store.dispatch(new SetContent(content));
  }

  onReset() {
    this.store.dispatch(new ResetContent());
  }
}
