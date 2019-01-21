import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AceEditorModule } from "ng2-ace-editor";

import { AppComponent } from "./app.component";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { MdViewerComponent } from "./md-viewer/md-viewer.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { EditorService } from "./editor.service";

@NgModule({
  declarations: [
    AppComponent,
    MdEditorComponent,
    MdViewerComponent,
    HeaderBarComponent,
    StatusBarComponent
  ],
  imports: [BrowserModule, AceEditorModule],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
