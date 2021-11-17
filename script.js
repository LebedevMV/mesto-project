const content = document.querySelector(".page");
// Выбираем элементы для попапа редактирования профиля
const popUpProfileEdit = content.querySelector("#edit-profile");
const profileEditButton = content.querySelector(".profile__edit-button");
const profileEditCloseButton = popUpProfileEdit.querySelector(".pop-up__close");
const profileNameEdit = popUpProfileEdit.querySelector(".pop-up__item_el_name");
const profileBioEdit = popUpProfileEdit.querySelector(".pop-up__item_el_bio");
const profileSubmitButton = popUpProfileEdit.querySelector(".pop-up__submit");
const profileName = content.querySelector(".profile__name");
const profileBio = content.querySelector(".profile__bio");
// Выбираем элементы для попапа добавления изображения
const popUpAddImage = content.querySelector("#add-image");
const addImageButton = content.querySelector(".profile__add-button");
const addImageCloseButton = popUpAddImage.querySelector(".pop-up__close");
const addImageTitleEdit = popUpAddImage.querySelector(".pop-up__item_el_title");
const addImageImageEdit = popUpAddImage.querySelector(
  ".pop-up__item_el_image-link"
);
const addImageSubmitButton = popUpAddImage.querySelector(".pop-up__submit");
//Выбираем элементы для попапа откпыимя изображения
const popUpviewImage = content.querySelector("#view-image");
const viewCloseButton = popUpviewImage.querySelector(".pop-up__close");

// Функции для попапов
function popUpOpen(popUp) {
  popUp.classList.remove("pop-up_is-closed");
}
function popUpClose(popUp) {
  popUp.classList.add("pop-up_is-closed");
}

// Функции попапа редактирования профиля
function profileEdit() {
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
  popUpOpen(popUpProfileEdit);
}

function profileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileBio.textContent = profileBioEdit.value;
  popUpClose(popUpProfileEdit);
}

function profileClose(evt) {
  popUpClose(popUpProfileEdit);
}

// Функции попапа добавления изображения
function addImageOpen() {
  popUpOpen(popUpAddImage);
}

function addImageClose() {
  popUpClose(popUpAddImage);
}

function addImageSubmit(evt) {
  evt.preventDefault();
  const postLink = addImageImageEdit.value;
  const postName = addImageTitleEdit.value;
  createCard(postName, postLink);
  popUpAddImage.reset();
  popUpClose(popUpAddImage);
  return images.prepend(newPost);
}

// Слушатели попапа редактирования профиля
profileEditButton.addEventListener("click", profileEdit);
profileEditCloseButton.addEventListener("click", profileClose);
popUpProfileEdit.addEventListener("submit", profileSubmit);
// Слушатели попапа добавления изображения
addImageButton.addEventListener("click", addImageOpen);
addImageCloseButton.addEventListener("click", addImageClose);
popUpAddImage.addEventListener("submit", addImageSubmit);

// Подгрузка карточек

function createCard(name, link) {
  const images = content.querySelector(".elements");
  const post = content.querySelector("#card").content;
  const newPost = post.querySelector(".card").cloneNode(true);
  newPost.querySelector(".card__image").src = link;
  newPost.querySelector(".card__image").alt = name;
  newPost.querySelector(".card__text").textContent = name;
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
  });

  // Открытие изображения

  const popUpviewImage = content.querySelector("#view-image");
  const imageClick = newPost.querySelector(".card__image");
  imageClick.addEventListener("click", function () {
    const imageContent = content.querySelector(".pop-up__view-image");
    imageContent.src = newPost.querySelector(".card__image").src;
    imageContent.alt = newPost.querySelector(".card__text").textContent;
    const imageTitle = content.querySelector(".pop-up__image-title");
    imageTitle.textContent = newPost.querySelector(".card__text").textContent;
    popUpviewImage.classList.toggle("pop-up_is-closed");
  });
  return images.prepend(newPost);
}

viewCloseButton.addEventListener("click", function () {
  popUpviewImage.classList.toggle("pop-up_is-closed");
});

const initialCards = [
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

// Подгрузка карточек

function getImages(cards) {
  cards.forEach(function (item) {
    const postLink = item.link;
    const postName = item.name;
    createCard(postName, postLink);
  });
}

getImages(initialCards);
