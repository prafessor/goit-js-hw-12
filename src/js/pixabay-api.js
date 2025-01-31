export const fetchPhotoByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    key: '48498756-24fea4538a1b2e6f47cfee5c0',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.status);
    }

    return responce.json();
  });
};
