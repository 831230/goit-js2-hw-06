const colorValueSpan=document.querySelector(".color");
const changeColorBtn=document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor(){
  const currentColor=getRandomHexColor();
  document.querySelector("body").style.backgroundColor=currentColor;
  colorValueSpan.textContent=currentColor;
};

changeColorBtn.addEventListener("click",changeColor);