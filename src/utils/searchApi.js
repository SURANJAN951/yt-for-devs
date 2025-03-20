import axios from 'axios';

export const searchVideos = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {
      q: query, // Use the user's query here
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': '3989f8dc43msh5553b2accedd2e6p1ca911jsn72a99777aef8', // Replace with your API key
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
