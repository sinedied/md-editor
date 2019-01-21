import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { AceEditorModule } from "ng2-ace-editor";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { MdViewerComponent } from "./md-viewer/md-viewer.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { EditorState } from "./editor.state";

@NgModule({
  declarations: [
    AppComponent,
    MdEditorComponent,
    MdViewerComponent,
    HeaderBarComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    NgxsModule.forRoot([EditorState]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
