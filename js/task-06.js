const input=document.querySelector('[data-length="6"]');

const inputValueLength=input.dataset.length;

function checkLongValueInput() {
  if (input.value.length==inputValueLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
};

input.addEventListener("blur",checkLongValueInput);