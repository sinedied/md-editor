import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "md-editor",
  templateUrl: "./md-editor.component.html",
  styleUrls: ["./md-editor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdEditorComponent {
  @ViewChild("editor") editor;
  @Input() content: string;
  @Output() contentChange = new EventEmitter<string>();
  options = {
    printMargin: false,
    wrap: true,
    scrollPastEnd: 0.5,
    fontSize: "16px"
  };

  ngAfterViewInit() {
    this.editor.getEditor().renderer.setScrollMargin(6, 0);
  }
}
