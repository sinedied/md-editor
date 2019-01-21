import { Component, Input } from "@angular/core";
import { Stats } from "../stats";

@Component({
  selector: "status-bar",
  templateUrl: "./status-bar.component.html",
  styleUrls: ["./status-bar.component.scss"]
})
export class StatusBarComponent {
  @Input() stats: Stats;
}
