import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const styles = {
  header: {
    background: "#343832",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: 300,
    fontSize: "1.5rem",
    borderBottom: "2px solid #222"
  },
  logo: {
    marginRight: "0.5rem"
  },
  reset: {
    verticalAlign: "middle",
    borderRadius: "50%",
    height: "1.5em",
    width: "1.5em",
    transition: "background 200ms ease-in-out",
    background: "transparent",
    border: "none",
    padding: "0.1em",
    color: "#fff",
    fontSize: "0.85em",
    float: "right",
    marginBottom: "-0.5em", // needed but why??? :/

    ":hover": {
      background: "#555"
    }
  }
};

const HeaderBar = Radium(({ onReset }) => (
  <header style={styles.header}>
    <i style={styles.logo} className="fas fa-pen-square" />
    {" Markdown Editor"}
    <button style={styles.reset} onClick={onReset}>
      <i className="fas fa-recycle" />
    </button>
  </header>
));

HeaderBar.propTypes = {
  onReset: PropTypes.func
};

export default HeaderBar;
