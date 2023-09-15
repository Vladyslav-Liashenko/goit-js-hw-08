// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

// Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryElement = [];

galleryItems.forEach((item) => {
  const galleryItemElement = document.createElement("li");
  galleryItemElement.className = "gallery__item";
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.setAttribute("href", item.original);
  const imageElement = document.createElement("img");
  imageElement.src = item.preview;
  imageElement.alt = item.description;
  imageElement.setAttribute("data-src", item.original);
  imageElement.className = "gallery__image";
  galleryItemElement.appendChild(link);
  link.appendChild(imageElement);
  galleryElement.push(galleryItemElement);
});
galleryContainer.append(...galleryElement);

galleryContainer.addEventListener("click", openmodal);
function openmodal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const src = event.target.dataset.src;
    const instance = basicLightbox.create(
      `
      <div class="modal">
          <img src="${src}" alt="${event.target.alt} href="${src}">
      </div>
  `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", keyCodeEvent);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", keyCodeEvent);
        }
      }
    );
    instance.show();
    function keyCodeEvent(event) {
      if (event.keyCode === 27) {
        instance.close();
      }
    }
  };
};
console.log(galleryItems);

