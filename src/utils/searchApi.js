import axios from 'axios';

export const searchVideos = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {
      q: query, 
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,  // ✅ Secure API key
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the search results
  } catch (error) {
    console.error('Error fetching videos:', error);
    return null;
  }
};
