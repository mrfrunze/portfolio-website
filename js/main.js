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
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    themeBtn.classList.toggle("sun")

    localStorage.setItem("saved-theme", getCurrentTheme())
    localStorage.setItem("saved-icon", getCurrentIcon())
})

const getCurrentTheme = function() {
    document.body.classList.contains("dark-theme") ? 
        "dark" : "light"
}

const getCurrentIcon = function() {
    themeBtn.classList.contains("sun") ? 
        "sun" : "moon"
}


const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollToBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function() {
    scrollToBtn.classList.toggle("active", this.window.scrollY > 500)
})

scrollToBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Navigation menu items active on page scroll
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section")
    const scrollY = window.pageYOffset

    sections.forEach(function(current) {
        let sectionHight = current.offsetHeight
        let sectionTop = current.offsetTop - 50;
        let      = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
            document.querySelector(`.nav-item a[href*="${sectionId}"]`).classList.add("active")
        } else {
            document.querySelector(`.nav-item a[href*="${sectionId}"]`).classList.remove("active")
        }
    })
})

//Responsive navigation menu toggle
const navBtn = document.querySelector(".nav-menu-btn");
const navBar = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", function () {
    navBtn.classList.toggle("close")
    navBar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLinks.forEach(function(link) {
    link.addEventListener("click", function(){
        navBtn.classList.remove("close")
        navBar.classList.remove("active")
        navMenu.classList.remove("active")
    })
});



//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
