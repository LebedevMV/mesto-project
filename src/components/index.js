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
  initialCards,
  getImages,
  fetchCards,
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
  setCloseListeners,
  setUserInfo,
  setUserPic,
} from "./modal.js";

profileEditButton.addEventListener("click", openProfileEditor);
editProfileForm.addEventListener("submit", submitProfile);

setCloseListeners();

import { getUser, getCards, addNewPost, editUserInfo } from "./api.js";


editUserInfo('sda', 'sads')
getUser();
getCards();
addNewPost("Тихий", "https://images.unsplash.com/photo-1643800870843-19b0fa733401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")

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

