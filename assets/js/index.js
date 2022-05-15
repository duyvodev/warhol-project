// let slider = document.querySelector(".slider")
// let content = document.querySelector(".content")
// let footer = document.querySelector(".footer-section")
let header = document.querySelector(".header-wrapper")
let searchBtn = document.getElementById("searchBtn")
let searchSection = document.querySelector(".search-section")
let searchCloseBtn = document.querySelector(".search-section__close")
let searchInput = document.querySelector(".search-section__input")
let goToTopBtn = document.querySelector(".goToTop-section")
let menuMobileBtn = document.querySelector(".mobile-menu")
let menuMobileOverlay = document.querySelector(".navbar--mobile")
let menuMobileList = document.querySelector(".navbar__list--mobile")
let menuMobileClose = document.querySelector(".navbar__close-btn--mobile")


//
// window.onwheel = e => {
//     if(e.deltaY >= 0){
//         // Scrolling Down with mouse
//         slider.classList.add("down-layer")
//     } else {
//         // Scrolling Up with mouse
//         slider.classList.remove("down-layer")
//         footer.classList.add("down-layer")
//     }
// }

// Catch Scroll up and down
window.onwheel = e => {
    if (e.deltaY >= 0) {
        // Scrolling Down with mouse

        // Hide header
        header.classList.add("header--hide")

        // Hide Go to Top button
        goToTopBtn.classList.remove("goToTop--hide")
    }
    else {
        // Scrolling Up with mouse

        // Display header
        header.classList.remove("header--hide")

    }

    // If the screen on top
    if (window.pageYOffset === 0) {
        // Hide go to top buttonon
        goToTopBtn.classList.add("goToTop--hide")
    }
}

goToTopBtn.onclick = () => {
    // Display header and hide GoToTop button
    header.classList.remove("header--hide")
    goToTopBtn.classList.add("goToTop--hide")
}

searchBtn.onclick = () => {
    // Display Search Section
    searchSection.classList.add("search-section--display")
}

searchCloseBtn.onclick = () => {
    // Hide Search Section and clear Search input
    searchSection.classList.remove("search-section--display")
    searchInput.value = ""
}

menuMobileBtn.onclick = () => {
    // Display NAVBAR MOBILE
    menuMobileOverlay.classList.add("navbar--mobile--display")
    menuMobileList.classList.add("navbar__list--mobile--slideIn")
}

menuMobileClose.onclick = () => {
    menuMobileOverlay.classList.remove("navbar--mobile--display")
}