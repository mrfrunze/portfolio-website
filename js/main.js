//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    window.scrollY > 1 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

//Services section - Modal
const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function (modalClick) {
    serviceModal[modalClick].classList.add("active")
}

learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", () => {
        modal(i)
    })
})

modalCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        serviceModal.forEach(modalView => {
            modalView.classList.remove("active")
        })
    })
})

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model")
const imgCard = document.querySelectorAll(".img-card")
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn")

const portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active")
}

imgCard.forEach((button, i) => {
    button.addEventListener("click", () => {
        portfolioModal(i)
    })
})

portfolioCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        portfolioModals.forEach(modalView => {
            modalView.classList.remove("active")
        })
    })
})

//Our clients - Swiper
let swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
