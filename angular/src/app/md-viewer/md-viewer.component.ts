import { Component, Input } from "@angular/core";
import * as marked from "marked";

@Component({
  selector: "md-viewer",
  templateUrl: "./md-viewer.component.html",
  styleUrls: ["./md-viewer.component.scss"]
})
export class MdViewerComponent {
  html: string = "";

  @Input()
  set content(str) {
    this.html = marked(str);
  }
}
