import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotoByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const galleryLoaderEl = document.querySelector('.loader');

searchFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const userQuery = event.currentTarget.elements.query.value.trim();

  searchFormEl.reset();

  if (userQuery === '') {
    return;
  }

  galleryEl.innerHTML = '';
  galleryLoaderEl.style.display = 'block';

  fetchPhotoByQuery(userQuery)
    .finally(() => {
      galleryLoaderEl.style.display = 'none';
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      galleryEl.innerHTML = createGalleryCardTemplate(data.hits);
      GalleryModalWindow.refresh();
    })
    .catch(err => {
      iziToast.error({
        title: err.message,
        position: 'topRight',
      });
    });
});

const GalleryModalWindow = new SimpleLightbox('.js-gallery-link');
