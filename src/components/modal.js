import { addImagePopup } from "./card.js";
import { openPopup, closePopup } from "./utils.js";
import { editUserInfo, editUserAvatar } from "./api.js";
import { startValidation } from "./validation.js";

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
const profilePic = content.querySelector(".profile__avatar");
const popups = document.querySelectorAll(".pop-up");
const changeAva = content.querySelector("#change-ava");
export const changeAvaButton = content.querySelector(".profile__overlay");
export const changeAvaForm = changeAva.querySelector(".pop-up__main-container");
const newAvaLink = changeAva.querySelector("#ava-link");
const submitNewAva = changeAva.querySelector(".pop-up__submit");

export const submitAvatar = () => {
  submitNewAva.textContent = "Сохранение";
  editUserAvatar(newAvaLink.value)
    .then((res) => {
      setUserPic(res.avatar);
      closePopup(changeAva);
      newAvaLink.value = "";
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      submitNewAva.textContent = "Сохранить";
    });
};

export const openAvaEditor = () => {
  openPopup(changeAva);
  startValidation({
    formSelector: ".pop-up",
    inputSelector: ".pop-up__item",
    submitButtonSelector: ".pop-up__submit",
    inactiveButtonClass: "pop-up__submit_disabled",
    inputErrorClass: "pop-up__item_type_error",
    errorClass: "pop-up__item-error_active",
  });
};
// Функции для попапа редактирования профиля
export function openProfileEditor() {
  profileNameEdit.value = profileName.textContent;
  profileBioEdit.value = profileBio.textContent;
  openPopup(editProfilePopUp);
  startValidation({
    formSelector: ".pop-up",
    inputSelector: ".pop-up__item",
    submitButtonSelector: ".pop-up__submit",
    inactiveButtonClass: "pop-up__submit_disabled",
    inputErrorClass: "pop-up__item_type_error",
    errorClass: "pop-up__item-error_active",
  });
}

export function submitProfile(evt) {
  submitProfileButton.textContent = "Сохранение";
  evt.preventDefault();
  editUserInfo(profileNameEdit.value, profileBioEdit.value)
    .then((res) => {
      setUserInfo(res.name, res.about);
      closePopup(editProfilePopUp);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      submitProfileButton.textContent =
        "Сохранить";
    });
}

export const setUserInfo = (name, bio) => {
  profileName.textContent = name;
  profileBio.textContent = bio;
};

export const setUserPic = (pic) => {
  profilePic.setAttribute("src", pic);
};

// Функции для попапа редактирования изображения

export function openAddImagePopup() {
  openPopup(addImagePopup);
  startValidation({
    formSelector: ".pop-up",
    inputSelector: ".pop-up__item",
    submitButtonSelector: ".pop-up__submit",
    inactiveButtonClass: "pop-up__submit_disabled",
    inputErrorClass: "pop-up__item_type_error",
    errorClass: "pop-up__item-error_active",
  });
}

// Закрытие всех поп-апов по esc / клику по крестику или заднему фону

function isOpened(item) {
  if (!item.classList.contains("pop-up_is-closed")) {
    return true;
  } else return false;
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = Array.from(popups).find(isOpened);
    closePopup(openedPopup);
  }
}

export const setCloseListeners = () => {
  Array.from(popups).forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (
        !evt.target.classList.contains("pop-up_is-closed") &&
        evt.target.classList.contains("pop-up")
      ) {
        closePopup(popup);
      }
      if (evt.target.classList.contains("pop-up__close")) {
        closePopup(popup);
      }
    });
  });
};
