import { connect } from "react-redux";
import { setContent, resetContent } from "../actions";
import App from "../components/App";

const getStats = content => {
  const matches = content.match(/[\w\d]+/gi);
  return {
    words: matches ? matches.length : 0,
    lines: content.split("\n").length
  };
};

const mapStateToProps = state => ({
  ...state.editor,
  stats: getStats(state.editor.content)
});

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(resetContent()),
  onChange: content => dispatch(setContent(content))
});

const EditorApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default EditorApp;
