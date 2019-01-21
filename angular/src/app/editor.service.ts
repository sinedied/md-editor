import { Injectable } from "@angular/core";
import { Stats } from "./stats";

const CONTENT_KEY = "content";

@Injectable()
export class EditorService {
  loadContent(): string {
    return localStorage.getItem(CONTENT_KEY);
  }

  saveContent(content: string) {
    localStorage.setItem(CONTENT_KEY, content);
  }

  getStats(content: string): Stats {
    const matches = content.match(/[\w\d]+/gi);
    return {
      words: matches ? matches.length : 0,
      lines: content.split("\n").length
    };
  }
}
