const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const $ulIngredients=document.getElementById("ingredients");
const fragment=document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const liElement=document.createElement("li");
  liElement.textContent=ingredient;
  liElement.classList="item";
  fragment.append(liElement);
});

$ulIngredients.append(fragment)