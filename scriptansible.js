function imageSlider(imgId, images, delay = 3000) {
  const img = document.getElementById(imgId);
  if (!img) return;

  let index = 0;
  let intervalId = null;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !intervalId) {
        intervalId = setInterval(() => {
          img.classList.add("fade-out");

          setTimeout(() => {
            index = (index + 1) % images.length;
            img.src = images[index];
            img.classList.remove("fade-out");
          }, 400);
        }, delay);
      }

      if (!entry.isIntersecting && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(img);
}

/* === PROJECT SLIDERS === */

imageSlider("ansibleProjectImg", [
  "./images/A11.png",
  "./images/A111.png",
  "./images/A2.png",
  "./images/A3.png",
  "./images/A4.png",
  "./images/A6.png",
  "./images/A5.png"
]);

imageSlider("ecommerceImg", [
  "./images/E1.png",
  "./images/E4.png",
  "./images/E5.png",
  "./images/E6.png",
  "./images/E2.png",
  "./images/E3.png"
]);

imageSlider("ecommerceAngularImg", [
  "./images/ang8.png",
  "./images/ang9.png",
  ".images/Ang1.png",
  "./images/ang2.png",
  "./images/ang3.png",
  "./images/ang4.png",
  "./images/ang5.png",
  "./images/ang6.png",
  "./images/ang7.png",
  "./images/ang10.png",
  "./images/ang11.png",
  "./images/ang12.png"
]);
