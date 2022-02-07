import "../pages/index.css";
import { startValidation } from "./validation.js";
export let userId = "";


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
  renderCards,
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
  changeAvaForm,
} from "./modal.js";

profileEditButton.addEventListener("click", openProfileEditor);
editProfileForm.addEventListener("submit", submitProfile);
changeAvaButton.addEventListener("click", openAvaEditor);
changeAvaForm.addEventListener("submit", submitAvatar);

setCloseListeners();

import { getAppInfo } from "./api.js";

console.log(userId);

getAppInfo()
  .then(([user, cards]) => {
    userId = user._id;
    setUserInfo(user.name, user.about), setUserPic(user.avatar);
    renderCards(cards);
  })
 .catch((err) => console.log(err));

