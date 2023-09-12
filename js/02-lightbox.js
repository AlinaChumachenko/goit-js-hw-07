import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, original, description}) => 
     `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
).join("");
list.insertAdjacentHTML("beforeend", markup)
console.log(galleryItems);

list.addEventListener("click", onPictureClick);

function onPictureClick (evt) {
  evt.preventDefault();
  if(evt.target === evt.currentTarget){
      return;}
  
    new SimpleLightbox (".gallery a", {
        captionsData: "alt", 
        captionDelay: 250
    }
);    
  }
