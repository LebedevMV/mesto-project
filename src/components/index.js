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
  initialCards,
  getImages,
} from "./card.js";

addImageForm.addEventListener("submit", submitNewImage);
addImageButton.addEventListener("click", openAddImagePopup);

getImages(initialCards);

import {
  submitProfile,
  profileEditButton,
  editProfileForm,
  openProfileEditor,
  openAddImagePopup,
  setCloseListeners
} from "./modal.js";

profileEditButton.addEventListener("click", openProfileEditor);
editProfileForm.addEventListener("submit", submitProfile);

setCloseListeners()
