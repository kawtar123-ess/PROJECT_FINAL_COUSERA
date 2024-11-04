document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  const affichageImg = document.querySelector(".affichage");
  const altText = document.querySelector(".altText");
  let currentIndex = 0;

  function updateImage(index) {
    if (index >= 0 && index < images.length) {
      affichageImg.src = images[index].src;
      currentIndex = index;
      altText.textContent = images[index].alt;
    }
  }

  // Add event listeners to log the ID of each image on hover
  images.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
      updateImage(index);
    });
  });

  // Event listener for arrow keys
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      updateImage(currentIndex);
    } else if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
      updateImage(currentIndex);
    }
  });
});
