import { showLoader, hideLoader, createGallery, clearGallery } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'You need to write something',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch((error) => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong',
        position: 'topRight',
      });
      console.error(error);
    });
});