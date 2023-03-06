import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const items = galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');
gallery.innerHTML = items;

gallery.addEventListener('click', onImgClick);



function onImgClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" 
    width="1280" 
    height="850">
`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', onEscapePress);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown',onEscapePress)    
            }
        }
    )
    function onEscapePress(event) {
     if (event.code==='Escape' && event.key==='Escape') {
            instance.close();
     }
 }
    instance.show()  
}
 