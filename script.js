document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});
// Healing animation with bilingual support

function playMusic() {

  document.getElementById("bgMusic").play();

}
function playMusic() {

  const audio = document.getElementById("bgMusic");

  audio.play();

  document.querySelector(".music-container").style.display = "none";

}