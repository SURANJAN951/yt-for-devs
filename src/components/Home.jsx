import React, { useEffect, useState, useContext } from "react"; 
import fetchTrendingVideos from "../utils/rapidapi.js";
import Sidebar from "./Sidebar";
import MonacoEditor from "@monaco-editor/react";
import Video from "./Video";
import { VideoContext } from "./context/VideoContext";

const Home = () => {
  const { videos, setVideos, loading, setLoading } = useContext(VideoContext);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript"); // Default language
  const [output, setOutput] = useState(""); // To store the output of the code

  useEffect(() => {
    if (videos.length === 0) {
      const loadVideos = async () => {
        try {
          const data = await fetchTrendingVideos();
          setVideos(data);
        } catch (error) {
          console.error("Failed to fetch trending videos");
        } finally {
          setLoading(false);
        }
      };

      loadVideos();
    } else {
      setLoading(false);
    }
  }, [videos, setVideos, setLoading]);

  const handleRunCode = (code) => {
    try {
      if (selectedLanguage === "javascript") {
        const result = eval(code);  
        setOutput(result ? result.toString() : "Code executed successfully");
      } else {
        setOutput("Execution not supported for this language.");
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  if (loading) {
    return <p className="text-center text-xl text-gray-500">Loading...</p>;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with Increased Width */}
        <div className="w-80 bg-gray-200 h-full overflow-y-auto border-r border-gray-300">
          <Sidebar />
        </div>

        {/* Videos Section */}
        <div className="flex-1 p-4 bg-white overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-4">Trending Videos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Video key={video.videoId} video={video} />
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button for Code Editor */}
      <button
        onClick={() => setShowCodeEditor(!showCodeEditor)}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
      >
        {showCodeEditor ? "Close Code Editor" : "Open Code Editor"}
      </button>

      {/* Toggle Button for Notepad */}
      <button
        onClick={() => setShowNotepad(!showNotepad)}
        className="absolute bottom-16 right-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-600"
      >
        {showNotepad ? "Close Notepad" : "Open Notepad"}
      </button>

      {/* Code Editor Section */}
      {showCodeEditor && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-50 border-t border-gray-300 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Code Editor</h2>
            <button
              onClick={() => setShowCodeEditor(false)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Close Code Editor
            </button>
          </div>

          {/* Language Selector */}
          <div className="mb-4">
            <label htmlFor="language" className="mr-2">Select Language:</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              {/* Add other languages as needed */}
            </select>
          </div>

          {/* Monaco Editor */}
          <MonacoEditor
            height="100%"  // Takes the full height of the section
            language={selectedLanguage}  // Dynamic language mode
            value="console.log('Hello, World!');"  // Initial content
            theme="vs-dark"  // Set theme
            options={{
              lineNumbers: "on",  // Show line numbers
              minimap: { enabled: false }  // Hide minimap for a cleaner UI
            }}
          />

          {/* Run Button */}
          <button
            onClick={() => handleRunCode(`console.log('Hello, World!');`)} // Example code to run
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Run Code
          </button>

          {/* Output Section */}
          {output && (
            <div className="mt-4 bg-gray-100 p-4 border rounded">
              <h3 className="font-semibold text-lg">Output:</h3>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      )}

      {/* Notepad Section */}
      {showNotepad && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-50 border-t border-gray-300 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Notepad</h2>
            <button
              onClick={() => setShowNotepad(false)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Close Notepad
            </button>
          </div>
          <textarea
            className="w-full h-full p-2 border border-gray-300 rounded"
            placeholder="Write your notes here..."
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Home;