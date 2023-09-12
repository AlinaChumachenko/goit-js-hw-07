import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems.map(
    ({preview, original, description}) => ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li> `
).join("");
list.insertAdjacentHTML("beforeend", markup)

console.log(galleryItems);
list.addEventListener("click", onPictureClick);

function onPictureClick (evt) {
  evt.preventDefault();
  if(evt.target === evt.currentTarget){
      return;}
      // console.log(evt.target, evt.currentTarget);
       
      // console.log(evt.target.closest('.gallery')); 
      const originalImg = evt.target.dataset.source;

const instance = basicLightbox.create(`<div class = "modal">
<img
      class="gallery__image"
      src="${originalImg}"
      width="1000"
    />
</div>`,
{
  onShow: () => document.addEventListener("keydown", onHandleKeyDown),
  onClose: () => document.removeEventListener("keydown", onHandleKeyDown),
});
instance.show();

// document.addEventListener("keydown", onHandleKeyDown);
// document.removeEventListener("keydown", onHandleKeyDown);

function onHandleKeyDown(evt) {
  if (evt.code === "Escape") { 
    instance.close();}
}


};
// instance.show()
// instance.show(() => console.log('lightbox now visible'))
// instance.close()
// instance.close(() => console.log('lightbox not visible anymore'))
