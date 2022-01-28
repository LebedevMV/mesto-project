export const showError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = errorMessage;
  input.classList.add("pop-up__item_type_error");
  errorElement.classList.add("pop-up__item-error_active");
};

export const hideError = (form, input) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove("pop-up__item_type_error");
  errorElement.classList.remove("pop-up__item-error_active");
};

export const isValid = (form, input) => {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input, input.validationMessage);
  }
};

export const hasInvalidInput = (inputArr) => {
  return inputArr.some((input) => {
    return !input.validity.valid;
  });
};


export const setButtonState = (inputArr, submit) => {
  if (!hasInvalidInput(inputArr)) {
    submit.classList.remove("pop-up__submit_disabled");
  } else submit.classList.add("pop-up__submit_disabled");
};

export const inputEventListeners = (form) => {
  const inputArr = Array.from(form.querySelectorAll(".pop-up__item"));
  const submit = form.querySelector(".pop-up__submit");
  if (submit != null) {
    setButtonState(inputArr, submit);
    inputArr.forEach((input) =>
      input.addEventListener("input", () => {
        setButtonState(inputArr, submit);
        isValid(form, input);
      })
    );
  } else {
    return
  }
};

//const profile = document.forms.profile
//inputEventListeners(profile)

export const startValidation = () => {
  const formsArray = Array.from(document.querySelectorAll(".pop-up"));
  formsArray.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    inputEventListeners(form);
  });
};

