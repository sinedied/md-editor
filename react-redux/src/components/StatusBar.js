import React from "react";
import PropTypes from "prop-types";

const styles = {
  status: {
    background: "#248",
    padding: "0.25rem 1rem",
    textAlign: "right",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 300
  },
  icon: {
    marginRight: "0.5rem"
  }
};

const StatusBar = ({ stats }) => (
  <div style={styles.status}>
    <i style={styles.icon} className="fas fa-bolt" />
    <strong>{(stats && stats.words) || 0}</strong>
    {" words "}
    &nbsp; <strong>{(stats && stats.lines) || 0}</strong>
    {" lines"}
  </div>
);

StatusBar.propTypes = {
  stats: PropTypes.shape({
    words: PropTypes.number,
    line: PropTypes.number
  })
};

export default StatusBar;
