const $numberInput=document.querySelector('input[type="number"]');
const $createBtn=document.querySelector('button[data-create]');
const $destroyBtn=document.querySelector('button[data-destroy]');
const $divBoxes=document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
  const fragment=document.createDocumentFragment();
  let divWidth=20;
  let divHeight=20;
  for (let i = 0; i <= amount; i++) {
    divWidth+=10;
    divHeight+=10;
    const divElement=document.createElement("div");
    divElement.style.width=divWidth+"px";
    divElement.style.height=divHeight+"px";
    divElement.classList="createdBox";
    divElement.style.backgroundColor=getRandomHexColor();
    fragment.append(divElement);
  }
  $divBoxes.prepend(fragment)
};

function destroyBoxes(){
  const $boxesToRemove=document.querySelectorAll(".createdBox");
  $boxesToRemove.forEach(box => {
    box.remove()
  });
};

$createBtn.addEventListener("click",function(){
  createBoxes($numberInput.value)
});

$destroyBtn.addEventListener("click",destroyBoxes);