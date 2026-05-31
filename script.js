document.querySelectorAll(".option").forEach(option => {
  option.addEventListener('click', function(){
    const url = this.getAttribute('data-link');

    if(url) {
      window.location.href = url;
    }
  });
});

document.querySelector("#logo").addEventListener('click', function(){
  const url = this.getAttribute('data-link');
  if (url) {
    window.location.href = url;
  }
});


const hoverSound = document.querySelector("#hoverSound");
const imageContainer = document.querySelector(".img-container");

document.body.addEventListener("click", () => {
  hoverSound.play();
  hoverSound.pause();
  hoverSound.currentTime = 0;
}, { once: true });

imageContainer.addEventListener("mouseenter", () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});

imageContainer.addEventListener("mouseleave", () => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
});