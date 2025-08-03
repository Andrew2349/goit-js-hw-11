// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader")
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
    const murkup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        `<li class="gallery-item">
          <div class="thumb">
          <a href="${largeImageURL}">
          <img class="gallery-img" alt="${tags}" src="${webformatURL}">
          </a>
          </div>
          <ul class="image-stats-list">
          <li class="image-stats-list-item">
              <h3>Likes</h3>
              <p>${likes}</p>
              </ul>
          </li>
          <li class="image-stats-list-item">
              <h3>Views</h3>
              <p>${views}</p>
              </ul>
          </li>
          <li class="image-stats-list-item">
              <h3>Comments</h3>
              <p>${comments}</p>
              </ul>
          </li>
          <li class="image-stats-list-item">
              <h3>Downloads</h3>
              <p>${downloads}</p>
              </ul>
          </li>
        </li>`
    }).join()
    gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = ""
}


export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}