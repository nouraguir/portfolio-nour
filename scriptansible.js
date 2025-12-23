const images = [
  "./images/A11.png",
  "./images/A111.png",
  "./images/A5.png",
  "./images/A6.png"
];

let currentIndex = 0;
const imageElement = document.getElementById("ansibleProjectImg");

setInterval(() => {
  imageElement.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1;
  }, 400);

}, 3000); 

const ecommerceImages = [
  "./images/E1.png",
  "./images/E2.png",
  "./images/E3.png",
  "./images/E4.png",
  "./images/E5.png",
  "./images/E6.png"
];

let ecommerceIndex = 0;
const ecommerceImg = document.getElementById("ecommerceImg");

setInterval(() => {
  ecommerceImg.style.opacity = 0;

  setTimeout(() => {
    ecommerceIndex = (ecommerceIndex + 1) % ecommerceImages.length;
    ecommerceImg.src = ecommerceImages[ecommerceIndex];
    ecommerceImg.style.opacity = 1;
  }, 400);

}, 3000); 
const angularEcommerceImages = [
  "./images/Ang1.png",
  "./images/ang2.png",
  "./images/ang3.png",
  "./images/Ang4.png",
  "./images/ang5.png",
  "./images/ang6.png",
  "./images/ang7.png",
  "./images/ang8.png",
  "./images/ang9.png",
  "./images/ang10.png",
  "./images/ang11.png",
  "./images/ang12.png"
];

let angularIndex = 0;
const angularImg = document.getElementById("ecommerceAngularImg");

setInterval(() => {
  angularImg.style.opacity = 0;

  setTimeout(() => {
    angularIndex = (angularIndex + 1) % angularEcommerceImages.length;
    angularImg.src = angularEcommerceImages[angularIndex];
    angularImg.style.opacity = 1;
  }, 400);

}, 3000);
