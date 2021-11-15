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

// Функции для попапа редактирования профиля
function profileOpen() {
  popUpProfileEdit.classList.toggle("pop-up_is-closed");
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
}
function profileClose() {
  popUpProfileEdit.classList.toggle("pop-up_is-closed");
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
const popUpAddImage = content.querySelector("#add-image");
const addImageButton = content.querySelector(".profile__add-button");
const addImageCloseButton = popUpAddImage.querySelector(".pop-up__close");
const addImageTitleEdit = popUpAddImage.querySelector(".pop-up__item_el_title");
const addImageImageEdit = popUpAddImage.querySelector(
  ".pop-up__item_el_image-link"
);
const addImageSubmitButton = popUpAddImage.querySelector(".pop-up__submit");
const addImageName = content.querySelector(".profile__name");
const addImageBio = content.querySelector(".profile__bio");

// Функции для попапа добавления изображения
function addImageToggle() {
  popUpAddImage.classList.toggle("pop-up_is-closed");
}

function addImageSubmit() {
  const images = content.querySelector(".elements");
  const post = content.querySelector("#card").content;
  const newPost = post.querySelector(".card").cloneNode(true);
  newPost.querySelector(".card__image").src = addImageImageEdit.value;
  newPost.querySelector(".card__image").alt = addImageTitleEdit.value;
  newPost.querySelector(".card__text").textContent = addImageTitleEdit.value;
  images.prepend(newPost);
  addImageToggle();

  const postLikeButton = newPost.querySelector(".card__like");
  console.log(postLikeButton);
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

  const popUpviewImage = content.querySelector("#view-image");
  const imageClick = newPost.querySelector(".card__image");
  imageClick.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    const imageContent = content.querySelector(".pop-up__view-image")
    imageContent.src = newPost.querySelector(".card__image").src
    imageContent.alt = newPost.querySelector(".card__text").textContent
    const imageTitle = content.querySelector(".pop-up__image-title")
    imageTitle.textContent = newPost.querySelector(".card__text").textContent
    popUpviewImage.classList.toggle("pop-up_is-closed");
  })
  return images.prepend(newPost);
}

// Слушатели событий для попапа редактирования профиля
addImageButton.addEventListener("click", addImageToggle);
addImageCloseButton.addEventListener("click", addImageToggle);
addImageSubmitButton.addEventListener("click", addImageSubmit);

// Подгрузка карточек

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

function getImages(cards) {
  cards.forEach(function (item) {
    const images = content.querySelector(".elements");
    const post = content.querySelector("#card").content;
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
    });

    // Открытие изображения
    const popUpviewImage = content.querySelector("#view-image");
    const imageClick = newPost.querySelector(".card__image");
    imageClick.addEventListener("click", function (evt) {
      const imageContent = content.querySelector(".pop-up__view-image")
      imageContent.src = newPost.querySelector(".card__image").src
      imageContent.alt = newPost.querySelector(".card__text").textContent
      const imageTitle = content.querySelector(".pop-up__image-title")
      imageTitle.textContent = newPost.querySelector(".card__text").textContent
      popUpviewImage.classList.toggle("pop-up_is-closed");
    })
    return images.prepend(newPost);
  });
}

getImages(initialCards);

const popUpviewImage = content.querySelector("#view-image");
const viewCloseButton = popUpviewImage.querySelector(".pop-up__close");
viewCloseButton.addEventListener("click", function() {
  popUpviewImage.classList.toggle("pop-up_is-closed")
})
