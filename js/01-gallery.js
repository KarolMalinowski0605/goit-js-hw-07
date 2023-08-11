import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function creatingGallery(){
    const addHtml = galleryItems.map(item => 
        `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src='${item.preview}'
            data-source='${item.original}'
            alt='${item.description}'
          />
        </a>
      </div>`
      ).join('');

      galleryContainer.innerHTML = addHtml;

    // const galleryHtml = galleryMarkup.join('');
    // galleryContainer.insertAdjacentHTML('beforeend',galleryHtml);

}

creatingGallery();

function openModal(event) {
    event.preventDefault();

    if(event.target.classList.contains('gallery__image')){

        const imageModal = event.target.dataset.source;

        const instance = basicLightbox.create (
            `<img src="${imageModal}" >`
        );
        instance.show();
    }
   

}

galleryContainer.addEventListener('click', openModal);











