import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "header-bar",
  templateUrl: "./header-bar.component.html",
  styleUrls: ["./header-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  @Output() onReset = new EventEmitter();
}
