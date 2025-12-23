const images = [
  "./images/A11.png",
  "./images/A111.png",
  "./images/A2.png",
  "./images/A3.png",
  "./images/A4.png",
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

}, 3000); // change image every 3 seconds
