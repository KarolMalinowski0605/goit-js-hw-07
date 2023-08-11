import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function creatingGallery() {
  const addHtml = galleryItems.map(item =>
    `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </div>`
  ).join('');

  galleryContainer.innerHTML = addHtml;
}

creatingGallery();

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
