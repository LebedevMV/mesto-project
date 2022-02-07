const showError = (form, input, errorMessage, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = errorMessage;
  input.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
};

const hideError = (form, input, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
};

const isValid = (form, input, config) => {
  if (input.validity.valid) {
    hideError(form, input, config);
  } else {
    showError(form, input, input.validationMessage, config);
  }
};

const hasInvalidInput = (inputArr) => {
  return inputArr.some((input) => {
    return !input.validity.valid;
  });
};

const setButtonState = (inputArr, submit, config) => {
  if (!hasInvalidInput(inputArr)) {
    submit.classList.remove(config.inactiveButtonClass)
    return submit.removeAttribute('disabled')
  } else submit.classList.add(config.inactiveButtonClass)
  return submit.setAttribute('disabled', '')
};

const inputEventListeners = (form, config) => {
  const inputArr = Array.from(form.querySelectorAll(config.inputSelector));
  const submit = form.querySelector(config.submitButtonSelector);
  if (submit != null) {
    setButtonState(inputArr, submit, config);
    inputArr.forEach((input) =>
      input.addEventListener("input", () => {
        setButtonState(inputArr, submit, config);
        isValid(form, input, config);
      })
    );
    form.addEventListener("submit", () => {
      setButtonState(inputArr, submit, config);
    });
  } else {
    return;
  }
};

export const startValidation = (config) => {
  const formsArray = Array.from(document.querySelectorAll(config.formSelector));
  formsArray.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    inputEventListeners(form, config);
  });
};
