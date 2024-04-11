//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    window.scrollY > 1 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

//Portfolio section - Modal
const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function(modalClick){
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

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
      