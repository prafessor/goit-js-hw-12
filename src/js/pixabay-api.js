import axios from 'axios';

export const fetchPhotoByQuery = async (searchedQuery, pageId) => {
  const searchParams = {
    params: {
      key: '48498756-24fea4538a1b2e6f47cfee5c0',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageId,
      per_page: 15,
    },
  };

  return await axios.get(`https://pixabay.com/api/`, searchParams);
};
