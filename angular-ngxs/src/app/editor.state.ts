import { State, Action, StateContext, Selector } from "@ngxs/store";

import { LoadContent, ResetContent, SetContent } from "./editor.actions";
import { Stats } from "./stats";

const CONTENT_KEY = "content";

export interface EditorStateModel {
  content: string;
}

@State<EditorStateModel>({
  name: "editor",
  defaults: { content: "" }
})
export class EditorState {
  @Selector()
  static stats(state: EditorStateModel): Stats {
    const { content } = state;
    const matches = content.match(/[\w\d]+/gi);
    return {
      words: matches ? matches.length : 0,
      lines: content.split("\n").length
    };
  }

  @Selector()
  static content(state: EditorStateModel): string {
    return state.content;
  }

  @Action(LoadContent)
  loadContent({ dispatch }: StateContext<EditorStateModel>) {
    const savedContent = localStorage.getItem(CONTENT_KEY);
    if (savedContent) {
      dispatch(new SetContent(savedContent));
    } else {
      dispatch(new ResetContent());
    }
  }

  @Action(ResetContent)
  resetContent({ patchState }: StateContext<EditorStateModel>) {
    patchState({ content: "# Welcome!\n\nType markdown *here* to start..." });
  }

  @Action(SetContent)
  setContent(
    { patchState }: StateContext<EditorStateModel>,
    { content }: SetContent
  ) {
    patchState({ content });
    localStorage.setItem(CONTENT_KEY, content);
  }
}
