import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AceEditorModule } from "ng2-ace-editor";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { MdEditorComponent } from "./md-editor/md-editor.component";
import { MdViewerComponent } from "./md-viewer/md-viewer.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { EditorEffects } from "./effects/editor.effects";
import { editorReducer } from "./reducers/editor.reducer";

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
    StoreModule.forRoot({ editor: editorReducer }),
    EffectsModule.forRoot([EditorEffects]),
    // Instrumentation must be imported after importing StoreModule
    StoreDevtoolsModule.instrument({
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
