import React from "react";
import marked from "marked";
import PropTypes from "prop-types";

import "./MdViewer.css";

const styles = {
  container: {
    flex: 1,
    overflow: "auto"
  },
  viewer: {
    padding: "0 1rem"
  }
};

const MdViewer = ({ content }) => (
  <div style={styles.container}>
    <div
      style={styles.viewer}
      className="viewer"
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  </div>
);

MdViewer.propTypes = {
  content: PropTypes.string
};

export default MdViewer;
