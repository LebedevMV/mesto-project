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
  addImagePopup.querySelector(".pop-up__submit").textContent = "Сохранение";
  const src = {};
  src.link = link.value;
  src.name = name.value;
  addNewPost(src.name, src.link)
    .catch((err) => {
      console.log(err);
    })
    .then((res) => {
      getCards()
        .then((res) => {
          clearCards();
          return res;
        })
        .then((res) => {
          fetchCards(res);
          return res
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((res) => {
          closePopup(addImagePopup);
          addImagePopup.querySelector(".pop-up__submit").textContent = "Сохранить";
          name.value = "";
          link.value = "";
        });
    })
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
    return like._id === "323ee26df72d5d21befc57c5";
  });
};

const setLikeListener = (item, newPost) => {
  const postLikeButton = newPost.querySelector(".card__like");
  postLikeButton.addEventListener("click", function (evt) {
    if (isLiked(item)) {
      removeLike(item._id)
        .catch((res) => {
          console.log("Не удалось снять лайк");
        })
        .finally((res) => {
          getCards()
            .then((res) => {
              clearCards();
              return res;
            })
            .then((res) => {
              fetchCards(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    } else
      likePost(item._id)
        .then((res) => {
          evt.target.classList.add("card__like_active");
          return res;
        })
        .catch((res) => {
          console.log("Не удалось поставить лайк");
        })
        .finally((res) => {
          getCards()
            .then((res) => {
              clearCards();
              return res;
            })
            .then((res) => {
              fetchCards(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
  });
};

const setDeleteListener = (item, newPost) => {
  const postDeleteButton = newPost.querySelector(".card__delete-button");
  if (postDeleteButton != null) {
    postDeleteButton.addEventListener("click", function (evt) {
      removePost(item._id)
        .catch((err) => {
          console.log(err);
        })
        .finally((res) => {
          getCards()
            .then((res) => {
              clearCards();
              return res;
            })
            .then((res) => {
              fetchCards(res);
            })
            .catch((err) => {
              console.log(err);
            });
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
