import "././pages/index.css";

import { startValidation } from "./components/validation.js";

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
  addImageSubmitButton,
  addImageOpen,
  addImageSubmit,
  initialCards,
  getImages,
} from "./components/card.js";

addImageSubmitButton.addEventListener("click", addImageSubmit);
addImageButton.addEventListener("click", addImageOpen);

getImages(initialCards);

import {
  profileOpen,
  profileSubmit,
  profileEditButton,
  profileSubmitButton,
  closePopUp,
} from "./components/modal.js";

profileEditButton.addEventListener("click", profileOpen);
profileSubmitButton.addEventListener("click", profileSubmit);
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopUp();
  }
});
document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("pop-up") ||
    evt.target.classList.contains("pop-up__close")
  ) {
    closePopUp();
  }
});
