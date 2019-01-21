import { Component } from "@angular/core";
import { EditorService } from "./editor.service";
import { Stats } from "./stats";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  content: string;
  stats: Stats;

  constructor(private editorService: EditorService) {
    const savedContent = editorService.loadContent();
    if (savedContent) {
      this.content = savedContent;
    } else {
      this.onReset();
    }
    // Needed to init stats on load
    this.onContentChanged();
  }

  onContentChanged() {
    this.stats = this.editorService.getStats(this.content);
    this.editorService.saveContent(this.content);
  }

  onReset() {
    this.content = "# Welcome!\n\nType markdown *here* to start...";
  }
}
