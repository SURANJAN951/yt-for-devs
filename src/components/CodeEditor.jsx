import React, { useEffect, useRef } from "react";

const CodeEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize the Redimate editor
    const editor = new Redimate(editorRef.current, {
      mode: "javascript", // You can change the mode based on your requirement
      theme: "monokai",   // You can change the theme
      value: "console.log('Hello, World!');", // Initial code content
      lineNumbers: true,  // Display line numbers
    });

    // Cleanup the editor when the component is unmounted
    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div
      ref={editorRef}
      style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
    ></div>
  );
};

export default CodeEditor;
