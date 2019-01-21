import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";

import EditorApp from "./containers/EditorApp";
import reducers from "./reducers";
import "./styles.css";

const CONTENT_KEY = "content";

const savedContent = localStorage.getItem(CONTENT_KEY);
const restoredState = savedContent
  ? { editor: { content: savedContent } }
  : undefined;

const store = createStore(reducers, restoredState, devToolsEnhancer());

store.subscribe(() => {
  localStorage.setItem(CONTENT_KEY, store.getState().editor.content);
});

render(
  <Provider store={store}>
    <EditorApp />
  </Provider>,
  document.getElementById("root")
);
