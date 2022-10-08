const hamburgerBtn = document.querySelector(".nav-hamburger-item")
const navPage = document.querySelector(".nav-page")
const navHedaerBtns = document.querySelectorAll(".nav-header")
const closeBtn = document.querySelector(".btn-close")
const navLinks = document.querySelectorAll(".nav-link")
const overlay = document.querySelector(".overlay")

const show = function (item) {
    item.classList.toggle("show")
}





hamburgerBtn.addEventListener("click", function () {
    show(navPage)
    show(closeBtn)
    show(overlay)
})

closeBtn.addEventListener("click", function () {
    show(navPage)
    show(closeBtn)
    show(overlay)
})

// pojawianie się linków w menu

navHedaerBtns[0].addEventListener("click", function () {
    for (let i = 0; i < 4; i++) {
        show(navLinks[i])
    }
})

navHedaerBtns[1].addEventListener("click", function () {
    for (let i = 4; i < 8; i++) {
        show(navLinks[i])
    }
})