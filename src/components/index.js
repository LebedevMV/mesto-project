import "../pages/index.css";
let userId = "";

import { startValidation } from "./validation.js";

startValidation({
  formSelector: ".pop-up",
  inputSelector: ".pop-up__item",
  submitButtonSelector: ".pop-up__submit",
  inactiveButtonClass: "pop-up__submit_disabled",
  inputErrorClass: "pop-up__item_type_error",
  errorClass: "pop-up__item-error_active",
});

import {
  addImageButton,
  addImageForm,
  submitNewImage,
  fetchCards,
} from "./card.js";

addImageForm.addEventListener("submit", submitNewImage);
addImageButton.addEventListener("click", openAddImagePopup);

import {
  submitProfile,
  profileEditButton,
  editProfileForm,
  openProfileEditor,
  openAddImagePopup,
  setCloseListeners,
  setUserInfo,
  setUserPic,
} from "./modal.js";

profileEditButton.addEventListener("click", openProfileEditor);
editProfileForm.addEventListener("submit", submitProfile);

setCloseListeners();

import { getUser, getCards, addNewPost } from "./api.js";

getUser();
getCards();

getUser()
  .then((res) => {
    (userId = res._id),
      setUserInfo(res.name, res.about),
      setUserPic(res.avatar);
  })
  .catch((err) => {
    console.log(err.status);
  });

getCards()
  .then((res) => {
    fetchCards(res);
  })
  .catch((err) => {
    console.log(err.status);
  });
