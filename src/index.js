import { startValidation } from "./components/validation.js";

startValidation({
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".pop-up__submit",
  inactiveButtonClass: "pop-up__submit_disabled",
  inputErrorClass: "pop-up__item_type_error",
  errorClass: "pop-up__item-error_active",
});

import {
  addImageButton,
  addImageCloseButton,
  addImageSubmitButton,
  addImageToggle,
  addImageSubmit,
  initialCards,
  getImages,
} from "./components/card.js";

addImageButton.addEventListener("click", addImageToggle);
addImageCloseButton.addEventListener("click", addImageToggle);
addImageSubmitButton.addEventListener("click", addImageSubmit);
getImages(initialCards);
