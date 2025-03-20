import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CodeEditor = ({ selectedLanguage }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize the Redimate editor
    const editor = new Redimate(editorRef.current, {
      mode: selectedLanguage, // Use the selected language
      theme: "monokai",       // You can change the theme
      value: "console.log('Hello, World!');", // Initial code content
      lineNumbers: true,      // Display line numbers
    });

    // Cleanup the editor when the component is unmounted
    return () => {
      editor.destroy();
    };
  }, [selectedLanguage]);

  return (
    <div
      ref={editorRef}
      style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
    ></div>
  );
};

CodeEditor.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

export default CodeEditor;