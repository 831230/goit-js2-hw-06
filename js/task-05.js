const input=document.getElementById("name-input");
const spanResult=document.getElementById("name-output");

function insertNameToSpan() {
  if (!input.value) {
    spanResult.textContent="Anonymous";
    return
  };
  spanResult.textContent=input.value
};

input.addEventListener("input", insertNameToSpan);