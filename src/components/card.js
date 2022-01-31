const popUpAddImage = document.querySelector("#add-image");
export const addImageButton = document.querySelector(".profile__add-button");
export const addImageSubmitButton =
  popUpAddImage.querySelector(".pop-up__submit");

export function addImageOpen() {
  popUpAddImage.classList.remove("pop-up_is-closed");
}

function addImageClose() {
  popUpAddImage.classList.add("pop-up_is-closed");
}

export function addImageSubmit() {
  const post = document.querySelector("#card").content;
  const newPost = post.querySelector(".card").cloneNode(true);
  const gallery = document.querySelector(".elements");
  createPost(newPost);
  setDeleteListener(newPost);
  setLikeListener(newPost);
  setOpenListener(newPost);
  return gallery.prepend(newPost);
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

const createPost = (newPost) => {
  const addImageImageEdit = popUpAddImage.querySelector(
    ".pop-up__item_el_image-link"
  );
  const addImageTitleEdit = popUpAddImage.querySelector(
    ".pop-up__item_el_title"
  );
  newPost.querySelector(".card__image").src = addImageImageEdit.value;
  newPost.querySelector(".card__image").alt = addImageTitleEdit.value;
  newPost.querySelector(".card__text").textContent = addImageTitleEdit.value;
  addImageClose();
  addImageTitleEdit.value = "";
  addImageImageEdit.value = "";
};

const createPosts = (item, newPost) => {
  newPost.querySelector(".card__image").src = item.link;
  newPost.querySelector(".card__image").alt = item.name;
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
    const eventTarget = evt.target;

    const postDelete = eventTarget.parentElement;
    postDelete.remove();
  });
};

const setOpenListener = (newPost) => {
  const imageClick = newPost.querySelector(".card__image");
  imageClick.addEventListener("click", function (evt) {
    viewImage(evt);
  });
};

export function getImages(cards) {
  cards.forEach(function (item) {
    const post = document.querySelector("#card").content;
    const newPost = post.querySelector(".card").cloneNode(true);
    const gallery = document.querySelector(".elements");
    createPosts(item, newPost);
    setDeleteListener(newPost);
    setLikeListener(newPost);
    setOpenListener(newPost);
    return gallery.prepend(newPost);
  });
}

const viewImage = (evt) => {
  const popUpviewImage = document.querySelector("#view-image");
  const imageContent = document.querySelector(".pop-up__view-image");
  imageContent.src = evt.target.parentElement.querySelector(".card__image").src;
  imageContent.alt =
    evt.target.parentElement.querySelector(".card__text").textContent;
  const imageTitle = document.querySelector(".pop-up__image-title");
  imageTitle.textContent =
    evt.target.parentElement.querySelector(".card__text").textContent;
  popUpviewImage.classList.toggle("pop-up_is-closed");
};
