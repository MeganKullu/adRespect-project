const previousButton = document.getElementById("data-carousel-previous");
    const nextButton = document.getElementById("data-carousel-next");
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    let currentItemIndex = 0;

    previousButton.addEventListener("click", () => {
        carouselItems[currentItemIndex].classList.add("hidden");
        currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentItemIndex].classList.remove("hidden");
    });

    nextButton.addEventListener("click", () => {
        carouselItems[currentItemIndex].classList.add("hidden");
        currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
        carouselItems[currentItemIndex].classList.remove("hidden");
    });

