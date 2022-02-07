import { closePopup, openPopup } from "./utils.js";
import {
  addNewPost,
  getCards,
  removePost,
  likePost,
  removeLike,
} from "./api.js";
import { userId } from "./index.js";

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

export const renderCards = (arr) => {
  arr.forEach(function (src) {
    return gallery.append(createPost(src));
  });
};

export function submitNewImage() {
  submitNewImageButton.textContent = "Сохранение";
  const src = {};
  src.link = link.value;
  src.name = name.value;
  addNewPost(src.name, src.link)
    .then((res) => {
      gallery.prepend(createPost(res));
      name.value = "";
      link.value = "";
      return res;
    })
    .then((res) => {
      closePopup(addImagePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      submitNewImageButton.textContent = "Сохранить";
    });
}

const createPost = (src) => {
  const newPost = createCardNode();
  fillPost(src, newPost);
  setDeleteListener(src, newPost);
  setLikeListener(src, newPost);
  ``;
  setOpenListener(newPost);
  return newPost;
};

const createCardNode = () => {
  return post.querySelector(".card").cloneNode(true);
};

const setLikeState = (item, newPost) => {
  const like = newPost.querySelector(".card__like");
  if (isLiked(item)) {
    like.classList.add("card__like_active");
  } else like.classList.remove("card__like_active");
};

const fillPost = (item, newPost) => {
  const cardImage = newPost.querySelector(".card__image");
  const cardLikeCounter = newPost.querySelector(".card__like-counter");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  if (item.owner._id != userId) {
    const deleteButton = newPost.querySelector(".card__delete-button");
    deleteButton.remove();
  }
  newPost.querySelector(".card__text").textContent = item.name;
  if (item.likes.length > 0) {
    cardLikeCounter.textContent = item.likes.length;
    cardLikeCounter.classList.add("card__like-counter_active");
  }
  setLikeState(item, newPost);
};

const isLiked = (item) => {
  return item.likes.some((like) => {
    return like._id === userId;
  });
};

const setLikeListener = (item, newPost) => {
  const postLikeButton = newPost.querySelector(".card__like");
  const cardLikeCounter = newPost.querySelector(".card__like-counter");
  postLikeButton.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("card__like_active")) {
      removeLike(item._id)
        .then((res) => {
          evt.target.classList.remove("card__like_active");
          return res;
        })
        .then((res) => {
          cardLikeCounter.textContent = res.likes.length;
          if (res.likes.length > 0) {
            cardLikeCounter.classList.add("card__like-counter_active");
          } else cardLikeCounter.classList.remove("card__like-counter_active");
        })
        .catch((res) => {
          console.log(`${res}:Не удалось снять лайк`);
        });
    } else
      likePost(item._id)
        .then((res) => {
          evt.target.classList.add("card__like_active");
          return res;
        })
        .then((res) => {
          cardLikeCounter.textContent = res.likes.length;
          if (res.likes.length > 0) {
            cardLikeCounter.classList.add("card__like-counter_active");
          } else cardLikeCounter.classList.remove("card__like-counter_active");
        })
        .catch((res) => {
          console.log(`${res}:Не удалось поставить лайк`);
        });
  });
};

const setDeleteListener = (item, newPost) => {
  const postDeleteButton = newPost.querySelector(".card__delete-button");
  if (postDeleteButton != null) {
    postDeleteButton.addEventListener("click", function (evt) {
      removePost(item._id)
        .then((res) => {
          newPost.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
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
