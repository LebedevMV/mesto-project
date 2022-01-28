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
const formElements = Array.from(document.querySelectorAll(".pop-up"));



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
profileSubmitButton.addEventListener("click", profileSubmit);


const popUpviewImage = content.querySelector("#view-image");
const viewCloseButton = popUpviewImage.querySelector(".pop-up__close");
function viewImageToggle() {
  popUpviewImage.classList.toggle("pop-up_is-closed");
}

// Закрытие всех поп-апов по esc / клику по крестику или заднему фону

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    formElements.forEach((formElement) => {
      formElement.classList.add("pop-up_is-closed");
    });
  }
});

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("pop-up")) {
    evt.target.classList.add("pop-up_is-closed");
  }
});

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("pop-up__close")) {
    evt.target.parentElement.parentElement.classList.add("pop-up_is-closed");
  }
});
