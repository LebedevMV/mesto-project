import {closeByEscape} from "./modal.js"

export function openPopup(popup) {
  popup.classList.remove("pop-up_is-closed");
  popup.addEventListener("keydown", closeByEscape)
}

export function closePopup(popup) {
  popup.classList.add("pop-up_is-closed");
  popup.removeEventListener("keydown", closeByEscape)
}
