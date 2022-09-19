const spanValue=document.getElementById("value");
const decrementBtn=document.querySelector('button[data-action="decrement"]');
const incrementBtn=document.querySelector('button[data-action="increment"]');

let counterValue=0;

function decrementValue(){
  counterValue-=1;
  spanValue.textContent=counterValue;
};

function incrementValue(){
  counterValue+=1;
  spanValue.textContent=counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);