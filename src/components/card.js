import { closePopup, openPopup } from "./utils.js";
import { addNewPost, getCards } from "./api.js";

export const addImagePopup = document.querySelector("#add-image");
export const addImageForm = addImagePopup.querySelector(
  ".pop-up__main-container"
);
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

export const fetchCards = (arr) => {
  arr.forEach(function (src) {
    return gallery.prepend(createPost(src));
  });
};

const clearCards = () => {
  const renderedCards = Array.from(gallery.querySelectorAll(".card"));
  renderedCards.forEach((post) => {
    post.remove();
  });
};

export function submitNewImage() {
  const src = {};
  src.link = link.value;
  src.name = name.value;
  addNewPost(src.name, src.link).catch((err) => {
    console.log(err);
  });
  clearCards();
  getCards()
    .then((res) => {
      fetchCards(res);
    })
    .catch((err) => {
      console.log(err.status);
    });
  name.value = "";
  link.value = "";
  closePopup(addImagePopup);
}

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
  const cardLike = newPost.querySelector(".card__like-counter");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  newPost.querySelector(".card__text").textContent = item.name;
  if ((item.likes.length = !null)) {
    cardLike.textContent = item.likes.length;
    cardLike.classList.add("card__like-counter_active");
  }
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

const viewImage = (evt) => {
  imageContent.src = evt.target.src;
  imageContent.alt = evt.target.alt;
  imageTitle.textContent = evt.target.alt;
  openPopup(popUpviewImage);
};
