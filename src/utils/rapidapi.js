// rapidapi.jsx
import axios from 'axios';

const fetchTrendingVideos = async () => {
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/v2/trending',
    headers: {
      'x-rapidapi-key': '8cbe3c99c3mshe8a7f9ed971a1eep115482jsn399f17432618',
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.list; // Return the list of trending videos
  } catch (error) {
    console.error('Error fetching trending videos:', error.message);
    throw error;
  }
};

export default fetchTrendingVideos;
