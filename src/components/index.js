import "../pages/index.css";
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
  submitAvatar,
  changeAvaButton,
  openAvaEditor,
  changeAvaForm
} from "./modal.js";

profileEditButton.addEventListener("click", openProfileEditor);
editProfileForm.addEventListener("submit", submitProfile);
changeAvaButton.addEventListener("click", openAvaEditor)
changeAvaForm.addEventListener("submit", submitAvatar)

setCloseListeners();

import { getUser, getCards } from "./api.js";
export let userId = "";


getUser()
  .then(res => {
    userId = res._id
    return res
  })
  .then((res) => {
      setUserInfo(res.name, res.about),
      setUserPic(res.avatar);
      return res
  })
  .catch((err) => {
    console.log(err);
  });

getCards()
  .then((res) => {
    fetchCards(res);
  })
  .catch((err) => {
    console.log(err);
  });
