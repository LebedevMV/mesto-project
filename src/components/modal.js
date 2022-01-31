const content = document.querySelector(".page");

// Выбираем элементы для попапа редактирования профиля
const popUpProfileEdit = content.querySelector("#edit-profile");
export const profileEditButton = content.querySelector(".profile__edit-button");
const profileNameEdit = popUpProfileEdit.querySelector(".pop-up__item_el_name");
const profileBioEdit = popUpProfileEdit.querySelector(".pop-up__item_el_bio");
export const profileSubmitButton = popUpProfileEdit.querySelector(".pop-up__submit");
const profileName = content.querySelector(".profile__name");
const profileBio = content.querySelector(".profile__bio");



// Функции для попапа редактирования профиля
export function profileOpen() {
  popUpProfileEdit.classList.remove("pop-up_is-closed");
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
}
function profileClose() {
  popUpProfileEdit.classList.add("pop-up_is-closed");
}

export function profileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileBio.textContent = profileBioEdit.value;
  profileClose();
}

// Закрытие всех поп-апов по esc / клику по крестику или заднему фону


export const closePopUp = () => {
  const popUps = Array.from(document.querySelectorAll(".pop-up"));
  popUps.forEach((popup) => {
    popup.classList.add("pop-up_is-closed");
  })
}
