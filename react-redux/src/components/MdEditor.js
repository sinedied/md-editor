import React, { Component } from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import "brace/mode/markdown";
import "brace/theme/monokai";

const styles = {
  editor: {
    background: "red",
    display: "flex",
    flex: 1,
    overflow: "hidden"
  }
};

class MdEditor extends Component {
  componentDidMount() {
    this.aceRef.editor.renderer.setScrollMargin(6, 0);
  }

  render() {
    return (
      <div style={styles.editor}>
        <AceEditor
          ref={e => (this.aceRef = e)}
          mode="markdown"
          theme="monokai"
          value={this.props.content}
          onChange={this.props.onChange}
          setOptions={{
            printMargin: false,
            wrap: true,
            scrollPastEnd: 0.5,
            fontSize: "16px"
          }}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

MdEditor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func
};

export default MdEditor;
