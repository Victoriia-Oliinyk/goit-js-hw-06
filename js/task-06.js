const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur)

function onValidationInputBlur(event) {

  const {
    value,
    dataset,
    classList,
  } = event.currentTarget;

  if (value.length === Number(dataset.length)) {

    if (classList.contains("invalid")) {
      classList.remove("invalid")
    }
    classList.add("valid");
    return;
  } 

  if (classList.contains("valid")) {
    classList.remove("valid")
  }
  classList.add("invalid");
}