import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // VITE environment variable
const API_HOST = 'youtube-search-and-download.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'X-RapidAPI-Key': API_KEY, // Correct API Key
    'X-RapidAPI-Host': API_HOST,
  },
});

export const searchVideos = async (query) => {
  try {
    const response = await apiClient.get('/search', {
      params: { q: query },
    });
    return response.data.contents; // Handle the response correctly
  } catch (error) {
    console.error('Error searching videos:', error.message);
    throw error;
  }
};