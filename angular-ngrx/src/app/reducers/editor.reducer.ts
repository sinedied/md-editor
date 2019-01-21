import { createSelector, createFeatureSelector } from "@ngrx/store";

import * as editor from "../actions/editor.actions";

export interface EditorState {
  content: string;
}

const defaultState = { content: "" };

export function editorReducer(
  state = defaultState,
  action: editor.Actions
): EditorState {
  switch (action.type) {
    case editor.SET_CONTENT:
      return {
        ...state,
        content: action.content
      };
    case editor.RESET_CONTENT:
      return {
        ...state,
        content: "# Welcome!\n\nType markdown *here* to start..."
      };
    default:
      return state;
  }
}

export const getEditorState = createFeatureSelector<EditorState>("editor");

export const getContent = createSelector<string>(getEditorState, state => {
  return state.content;
});

export const getStats = createSelector<Stats>(getContent, content => {
  const matches = content.match(/[\w\d]+/gi);
  return {
    words: matches ? matches.length : 0,
    lines: content.split("\n").length
  };
});
