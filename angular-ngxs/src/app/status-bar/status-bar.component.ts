import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Stats } from "../stats";

@Component({
  selector: "status-bar",
  templateUrl: "./status-bar.component.html",
  styleUrls: ["./status-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBarComponent {
  @Input() stats: Stats;
}
