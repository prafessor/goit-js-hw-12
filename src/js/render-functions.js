export const createGalleryCardTemplate = data => {
  return data
    .map(photo => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = photo;

      return `
      <li class="gallery-item">
        <a class="gallery-link js-gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}">
          <div class="gallery-addition">
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Likes</span>
              <span class="gallery-addition-value">${likes}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Views</span>
              <span class="gallery-addition-value">${views}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Comments</span>
              <span class="gallery-addition-value">${comments}</span>
            </div>
            <div class="gallery-addition-item">
              <span class="gallery-addition-title">Downloads</span>
              <span class="gallery-addition-value">${downloads}</span>
            </div>
          </div>
        </a>
      </li>
      `;
    })
    .join('');
};
