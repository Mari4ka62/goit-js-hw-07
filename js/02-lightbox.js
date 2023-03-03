import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const items = galleryItems.map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
}).join('');
gallery.innerHTML = items;
 
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img[alt]",
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay:250,
})