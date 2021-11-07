let content = document.querySelector(".page");

// Выбираем элементы для попапа редактирования профиля
let popUpProfileEdit = content.querySelector("#edit-profile");
let profileEditButton = content.querySelector(".profile__edit-button");
let profileEditCloseButton = popUpProfileEdit.querySelector(".pop-up__close");
let profileNameEdit = popUpProfileEdit.querySelector(".pop-up__item_el_name");
let profileBioEdit = popUpProfileEdit.querySelector(".pop-up__item_el_bio");
let profileSubmitButton = popUpProfileEdit.querySelector(".pop-up__submit");
let profileName = content.querySelector(".profile__name");
let profileBio = content.querySelector(".profile__bio");

// Функции для попапа редактирования профиля
function profileOpen() {
  popUpProfileEdit.classList.remove("pop-up_is-closed");
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
}
function profileClose() {
  popUpProfileEdit.classList.add("pop-up_is-closed");
}

function profileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileBio.textContent = profileBioEdit.value;
  profileClose();
}

// Слушатели событий для попапа редактирования профиля
profileEditButton.addEventListener("click", profileOpen);
profileEditCloseButton.addEventListener("click", profileClose);
profileSubmitButton.addEventListener("click", profileSubmit);

// Выбираем элементы для попапа добавления изображения
let popUpAddImage = content.querySelector("#add-image");
let addImageButton = content.querySelector(".profile__add-button");
let addImageCloseButton = popUpAddImage.querySelector(".pop-up__close");
let addImageTitleEdit = popUpAddImage.querySelector(".pop-up__item_el_title");
let addImageImageEdit = popUpAddImage.querySelector(".pop-up__item_el_image-link");
let addImageSubmitButton = popUpAddImage.querySelector(".pop-up__submit");
let addImageName = content.querySelector(".profile__name");
let addImageBio = content.querySelector(".profile__bio");

// Функции для попапа добавления изображения
function addImageOpen() {
  popUpAddImage.classList.remove("pop-up_is-closed");
}
function addImageClose() {
  popUpAddImage.classList.add("pop-up_is-closed");
}
function addImageSubmit() {
  let images = content.querySelector(".elements");
  images.insertAdjacentHTML("afterBegin", `<article class="card"><img class="card__image" src="${addImageImageEdit.value}" alt="${addImageTitleEdit.value}"/><div class="card__description"><h3 class="card__text">${addImageTitleEdit.value}</h3><button class="card__like" type="button"></button></div></article>`);
  addImageClose();
}

// Слушатели событий для попапа редактирования профиля
addImageButton.addEventListener("click", addImageOpen);
addImageCloseButton.addEventListener("click", addImageClose);
addImageSubmitButton.addEventListener("click", addImageSubmit);

let postLikeButton = content.querySelector(".card__like");

function postLike() {
  postLikeButton.classList.add("card__like_active");
}

postLikeButton.addEventListener("click", postLike);
