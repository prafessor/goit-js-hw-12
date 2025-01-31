import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotoByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const galleryLoaderEl = document.querySelector('.loader');
const galleryLoadMoreBtnEl = document.querySelector('.js-gallery-load-btn');

let page = 1;
let totalPage = 0;

let userQuery = '';

const scrollGalleryCard = () => {
  const galleryCardHeight = document
    .querySelector('.js-gallery-item')
    .getBoundingClientRect().height;
  const scrollOption = {
    top: 2 * galleryCardHeight - 36,
    behavior: 'smooth',
  };
  scrollBy(scrollOption);
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    galleryLoadMoreBtnEl.classList.add('hidden');

    userQuery = event.currentTarget.elements.query.value.trim();
    searchFormEl.reset();

    if (userQuery === '') {
      return;
    }

    galleryEl.innerHTML = '';
    galleryLoaderEl.style.display = 'block';

    page = 1;

    const { data } = await fetchPhotoByQuery(userQuery, page);

    totalPage = Math.ceil(data.total / 15);

    galleryLoaderEl.style.display = 'none';

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

    if (totalPage > 1) {
      galleryLoadMoreBtnEl.classList.remove('hidden');
      galleryLoadMoreBtnEl.addEventListener('click', onBtnLoadMoreClick);
    }
  } catch (err) {
    iziToast.error({
      title: err.message,
      position: 'topRight',
    });
  }
};

const onBtnLoadMoreClick = async () => {
  try {
    page++;
    galleryLoadMoreBtnEl.style.opacity = 0;
    galleryLoaderEl.style.display = 'block';

    const { data } = await fetchPhotoByQuery(userQuery, page);

    galleryLoaderEl.style.display = 'none';
    galleryLoadMoreBtnEl.style.opacity = 1;

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCardTemplate(data.hits)
    );
    GalleryModalWindow.refresh();

    scrollGalleryCard();

    if (page === totalPage || page === 34) {
      galleryLoadMoreBtnEl.classList.add('hidden');
      galleryLoadMoreBtnEl.removeEventListener('click', onBtnLoadMoreClick);

      iziToast.info({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    iziToast.error({
      title: err.message,
      position: 'topRight',
    });
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
const GalleryModalWindow = new SimpleLightbox('.js-gallery-link');
