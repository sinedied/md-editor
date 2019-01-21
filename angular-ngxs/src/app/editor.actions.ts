export class LoadContent {
  static readonly type = "[Editor] Load content";
}

export class ResetContent {
  static readonly type = "[Editor] Reset content";
}

export class SetContent {
  static readonly type = "[Editor] Set content";
  constructor(public readonly content: string) {}
}
