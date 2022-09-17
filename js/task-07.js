const $inputRange=document.getElementById("font-size-control");
const $spanText=document.getElementById("text");

function changeFontSize(){
  $spanText.style.fontSize=$inputRange.value+"px"
};

$inputRange.addEventListener("input",changeFontSize);