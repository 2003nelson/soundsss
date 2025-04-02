document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active"); // Oculta la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Mueve al siguiente índice
        images[currentIndex].classList.add("active"); // Muestra la nueva imagen
    }

    setInterval(changeImage, 3000); // Cambia cada 3 segundos
});
