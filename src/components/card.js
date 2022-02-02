import { closePopup, openPopup } from "./utils.js";
export const addImagePopup = document.querySelector("#add-image");
export const addImageForm = addImagePopup.querySelector(".pop-up__main-container");
export const addImageButton = document.querySelector(".profile__add-button");
export const submitNewImageButton =
  addImagePopup.querySelector(".pop-up__submit");
const gallery = document.querySelector(".elements");
const post = document.querySelector("#card").content;
const popUpviewImage = document.querySelector("#view-image");
const imageContent = document.querySelector(".pop-up__view-image");
const imageTitle = document.querySelector(".pop-up__image-title");
const link = addImagePopup.querySelector(".pop-up__item_el_image-link");
const name = addImagePopup.querySelector(".pop-up__item_el_title");


export function submitNewImage() {
  const src = {};
  src.link = link.value;
  src.name = name.value;
  gallery.prepend(createPost(src));
  name.value = "";
  link.value = "";
  closePopup(addImagePopup);
}

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const createPost = (src) => {
  const newPost = createCardNode();
  fillPost(src, newPost);
  setDeleteListener(newPost);
  setLikeListener(newPost);
  ``;
  setOpenListener(newPost);
  return newPost;
};

const createCardNode = () => {
  return post.querySelector(".card").cloneNode(true);
};

const fillPost = (item, newPost) => {
  const cardImage = newPost.querySelector(".card__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  newPost.querySelector(".card__text").textContent = item.name;
};

const setLikeListener = (newPost) => {
  const postLikeButton = newPost.querySelector(".card__like");
  postLikeButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("card__like_active");
  });
};

const setDeleteListener = (newPost) => {
  const postDeleteButton = newPost.querySelector(".card__delete-button");
  postDeleteButton.addEventListener("click", function (evt) {
    newPost.remove();
  });
};

const setOpenListener = (newPost) => {
  const imageClick = newPost.querySelector(".card__image");
  imageClick.addEventListener("click", function (evt) {
    viewImage(evt);
  });
};

export function getImages(cards) {
  cards.forEach(function (src) {
    return gallery.prepend(createPost(src));
  });
}

const viewImage = (evt) => {
  imageContent.src = evt.target.src;
  imageContent.alt = evt.target.alt;
  imageTitle.textContent = evt.target.alt;
  openPopup(popUpviewImage);
};
