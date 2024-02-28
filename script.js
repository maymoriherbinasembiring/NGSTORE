const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    // Tambahkan event listener untuk hamburger menu
    let menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", function () {
        // Tambahkan logika toggle menu di sini
        console.log("Hamburger menu clicked!");
    });
});