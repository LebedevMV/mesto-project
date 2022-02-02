import { addImagePopup } from "./card.js";
import { openPopup, closePopup } from "./utils.js";

const content = document.querySelector(".page");

// Выбираем элементы для попапа редактирования профиля
export const editProfilePopUp = content.querySelector("#edit-profile");
export const editProfileForm = editProfilePopUp.querySelector(
  ".pop-up__main-container"
);
export const profileEditButton = content.querySelector(".profile__edit-button");
const profileNameEdit = editProfilePopUp.querySelector(".pop-up__item_el_name");
const profileBioEdit = editProfilePopUp.querySelector(".pop-up__item_el_bio");
export const submitProfileButton =
  editProfilePopUp.querySelector(".pop-up__submit");
const profileName = content.querySelector(".profile__name");
const profileBio = content.querySelector(".profile__bio");
const popups = document.querySelectorAll(".pop-up");

// Функции для попапа редактирования профиля
export function openProfileEditor() {
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
  openPopup(editProfilePopUp);
}

export function submitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileBio.textContent = profileBioEdit.value;
  closePopup(editProfilePopUp);
}

// Функции для попапа редактирования изображения

export function openAddImagePopup() {
  openPopup(addImagePopup);
}

// Закрытие всех поп-апов по esc / клику по крестику или заднему фону
const popUpsArray = Array.from(document.querySelectorAll(".pop-up"));

function isOpened (item) {
  if (!item.classList.contains("pop-up_is-closed")){
    return true
  } else return false
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = Array.from(popups).find(isOpened)
    closePopup(openedPopup);
  }
}

export const setCloseListeners = () => {
  popUpsArray.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (!evt.target.classList.contains("pop-up_is-closed") && evt.target.classList.contains("pop-up")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("pop-up__close")) {
      closePopup(popup);
    }
  });
});
}
