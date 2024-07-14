import axios from 'axios';

const API_KEY = '44876277-9d7d32ea1804ca7606f668178';
const URL = 'https://pixabay.com/api/';

async function fetchImages(query, page) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

export { fetchImages };
