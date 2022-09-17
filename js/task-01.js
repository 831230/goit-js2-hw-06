const $liItemsArr=document.querySelectorAll(".item");

// console.log("Number of categories: "+ $liItems.length)
console.log(`Number of categories: ${$liItemsArr.length}`);

$liItemsArr.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});