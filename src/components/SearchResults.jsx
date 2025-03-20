import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams(location.search).get("q");

  const fetchVideos = async (pageToken = "") => {
    if (!query) return;

    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://youtube138.p.rapidapi.com/search/",
        params: { q: query, hl: "en", gl: "US", pageToken },
        headers: {
          "x-rapidapi-key": "8cbe3c99c3mshe8a7f9ed971a1eep115482jsn399f17432618",
          "x-rapidapi-host": "youtube138.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setResults((prev) => [...prev, ...(response.data.contents || [])]);
      setNextPage(response.data.nextPage);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setResults([]); // Reset results when query changes
    fetchVideos();
  }, [query]);

  return (
    <div className="relative h-screen">
      <h2 className="text-xl font-semibold p-4">Search results for "{query}"</h2>

      {/* Scrollable Video List */}
      <div className="overflow-y-auto h-[calc(100vh-60px)] p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item, index) => {
            if (item.type !== "video") return null;

            const video = item.video;
            return (
              <div
                key={index}
                className="cursor-pointer border p-2 rounded-lg hover:bg-gray-100"
                onClick={() => navigate(`/video/${video.videoId}`)}
              >
                <img src={video.thumbnails[0].url} alt={video.title} className="w-full rounded-lg" />
                <h3 className="text-lg font-medium mt-2">{video.title}</h3>
                <p className="text-gray-600">{video.author.title}</p>
                <p className="text-gray-500">{video.stats.views} views • {video.publishedTimeText}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fixed Load More Button */}
      {nextPage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <button
            onClick={() => fetchVideos(nextPage)}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
