import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "header-bar",
  templateUrl: "./header-bar.component.html",
  styleUrls: ["./header-bar.component.scss"]
})
export class HeaderBarComponent {
  @Output() onReset = new EventEmitter();
}
