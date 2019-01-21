import { Action } from "@ngrx/store";

export const LOAD_CONTENT = "[Editor] Load content";
export const RESET_CONTENT = "[Editor] Reset content";
export const SET_CONTENT = "[Editor] Set content";

export class LoadContent implements Action {
  readonly type = LOAD_CONTENT;
}

export class ResetContent implements Action {
  readonly type = RESET_CONTENT;
}

export class SetContent implements Action {
  readonly type = SET_CONTENT;
  constructor(public readonly content: string) {}
}

export type Actions = LoadContent | ResetContent | SetContent;
