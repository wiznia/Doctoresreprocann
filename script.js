document.addEventListener('DOMContentLoaded', function() {
  let menuVisible = false;
  //Función que oculta o muestra el menu
  document.querySelector('.nav-responsive').addEventListener('click', function() {
    if (menuVisible) {
      document.getElementById("nav").classList ="";
      menuVisible = false;
    } else {
      document.getElementById("nav").classList ="responsive";
      menuVisible = true;
    }
  });

  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', function() {
      this.play();
    });

    video.addEventListener('mouseleave', function() {
      this.pause();
    });
  });
});