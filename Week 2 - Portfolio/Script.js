let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

document.getElementById("prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.getElementById("next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});
