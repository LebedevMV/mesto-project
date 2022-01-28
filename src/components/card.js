
// Выбираем элементы для попапа добавления изображения
export const  popUpAddImage = document.querySelector("#add-image");
export const  addImageButton = document.querySelector(".profile__add-button");
export const  addImageCloseButton = popUpAddImage.querySelector(".pop-up__close");
export const  addImageTitleEdit = popUpAddImage.querySelector(".pop-up__item_el_title");
export const  addImageImageEdit = popUpAddImage.querySelector(
  ".pop-up__item_el_image-link"
);
export const  addImageSubmitButton = popUpAddImage.querySelector(".pop-up__submit");
export const  addImageName = document.querySelector(".profile__name");
export const  addImageBio = document.querySelector(".profile__bio");

// Функции для попапа добавления изображения
export function addImageToggle() {
  popUpAddImage.classList.toggle("pop-up_is-closed");
}

export function addImageSubmit() {
  const images = document.querySelector(".elements");
  const post = document.querySelector("#card").content;
  const newPost = post.querySelector(".card").cloneNode(true);
  newPost.querySelector(".card__image").src = addImageImageEdit.value;
  newPost.querySelector(".card__image").alt = addImageTitleEdit.value;
  newPost.querySelector(".card__text").textContent = addImageTitleEdit.value;
  images.prepend(newPost);
  addImageToggle();
  addImageTitleEdit.value = "";
  addImageImageEdit.value = "";

  const postLikeButton = newPost.querySelector(".card__like");
  postLikeButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("card__like_active");
  });

  const postDeleteButton = newPost.querySelector(".card__delete-button");
  postDeleteButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    const postToDelete = eventTarget.parentElement;
    postToDelete.remove();
  });

  const popUpviewImage = document.querySelector("#view-image");
  const imageClick = newPost.querySelector(".card__image");
  imageClick.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    const imageContent = document.querySelector(".pop-up__view-image");
    imageContent.src = newPost.querySelector(".card__image").src;
    imageContent.alt = newPost.querySelector(".card__text").textContent;
    const imageTitle = document.querySelector(".pop-up__image-title");
    imageTitle.textContent = newPost.querySelector(".card__text").textContent;
    popUpviewImage.classList.toggle("pop-up_is-closed");
  });
  return images.prepend(newPost);
}



// Подгрузка карточек

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

export function getImages(cards) {
  cards.forEach(function (item) {
    const images = document.querySelector(".elements");
    const post = document.querySelector("#card").content;
    const newPost = post.querySelector(".card").cloneNode(true);
    newPost.querySelector(".card__image").src = item.link;
    newPost.querySelector(".card__image").alt = item.name;
    newPost.querySelector(".card__text").textContent = item.name;
    // Лайк карточек
    const postLikeButton = newPost.querySelector(".card__like");
    postLikeButton.addEventListener("click", function (evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle("card__like_active");
    });
    // Удаление карточек
    const postDeleteButton = newPost.querySelector(".card__delete-button");
    postDeleteButton.addEventListener("click", function (evt) {
      const eventTarget = evt.target;

      const postDelete = eventTarget.parentElement;
      postDelete.remove();
    })

    // Открытие изображения
    const popUpviewImage = document.querySelector("#view-image");
    const imageClick = newPost.querySelector(".card__image");
    imageClick.addEventListener("click", function (evt) {
      const imageContent = document.querySelector(".pop-up__view-image");
      imageContent.src = newPost.querySelector(".card__image").src;
      imageContent.alt = newPost.querySelector(".card__text").textContent;
      const imageTitle = document.querySelector(".pop-up__image-title");
      imageTitle.textContent = newPost.querySelector(".card__text").textContent;
      popUpviewImage.classList.toggle("pop-up_is-closed");
    });
    return images.prepend(newPost);
  });
}
