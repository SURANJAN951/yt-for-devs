// Notepa.jsx
import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Notepa = ({ note, setNote, setShowNotepa }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white border-t border-gray-300 p-4 overflow-hidden z-20">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Notepa</h2>
        <button
          onClick={() => setShowNotepa(false)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Close Notepa
        </button>
      </div>

      {/* Monaco Editor for Notepad */}
      <MonacoEditor
        height="90%"  // Taking full available height
        language="plaintext"  // Notepad ke liye plain text
        value={note}
        theme="vs-light"  // Light theme (can change to "vs-dark" if needed)
        onChange={(value) => setNote(value)}  // Updating state
        options={{
          lineNumbers: "on",  // Line numbers on
          minimap: { enabled: false },  // Minimap off for a cleaner look
          wordWrap: "on",  // Word wrapping enabled
        }}
      />
    </div>
  );
};

export default Notepa;