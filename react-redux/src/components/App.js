import React from "react";
import PropTypes from "prop-types";

import HeaderBar from "./HeaderBar";
import StatusBar from "./StatusBar";
import MdViewer from "./MdViewer";
import MdEditor from "./MdEditor";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  splitView: {
    display: "flex",
    flex: 1
  }
};

const App = ({ content, stats, onChange, onReset }) => (
  <div style={styles.container}>
    <HeaderBar onReset={onReset} />
    <div style={styles.splitView}>
      <MdEditor content={content} onChange={onChange} />
      <MdViewer content={content} />
    </div>
    <StatusBar stats={stats} />
  </div>
);

App.propTypes = {
  content: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    words: PropTypes.number,
    line: PropTypes.number
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default App;
