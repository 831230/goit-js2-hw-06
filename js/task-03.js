const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery=document.querySelector(".gallery");

images.forEach(img => {
  const stringToHtml=`<li class="gallery__item"><img class="gallery__image" src="${img.url}" alt="${img.alt}"></img></li>`;
  ulGallery.insertAdjacentHTML("afterbegin",stringToHtml);
});


// const fragment=document.createDocumentFragment();

// images.forEach(img => {
//   const liElement=document.createElement("li");
//   liElement.classList="gallery__item";
//   const imgElement=document.createElement("img");
//   imgElement.classList="gallery__image";
//   imgElement.setAttribute("src", img.url);
//   imgElement.setAttribute("alt", img.alt);
//   liElement.append(imgElement);
//   fragment.append(liElement);
// });

// $ulGallery.append(fragment);

