const slider = document.querySelector(".slider")
// const content = document.querySelector(".content")
// const footer = document.querySelector(".footer-section")
const header = document.querySelector(".header-wrapper")
const searchBtn = document.getElementById("searchBtn")
const searchSection = document.querySelector(".search-section")
const searchCloseBtn = document.querySelector(".search-section__close")
const searchInput = document.querySelector(".search-section__input")
const goToTopBtn = document.querySelector(".goToTop-section")
const menuMobile = document.querySelector(".navbar--mobile")
const menuMobileBtn = document.querySelector(".mobile-menu")
const menuMobileOverlay = document.querySelector(".navbar__overlay--mobile")
const menuMobileList = document.querySelector(".navbar__list--mobile")
const menuMobileClose = document.querySelector(".navbar__close-btn--mobile")
const loader = document.querySelector(".loader")

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
    menuMobile.classList.add("navbar--mobile_popUp")
    menuMobileOverlay.classList.add("navbar__overlay--mobile_display")
    menuMobileList.classList.add("navbar__list--mobile--display")
}

menuMobileClose.onclick = () => {
    menuMobileList.classList.remove("navbar__list--mobile--display")
    setTimeout(()=>{
        menuMobileOverlay.classList.remove("navbar__overlay--mobile_display")
    },300)
    setTimeout(() => {
        menuMobile.classList.remove("navbar--mobile_popUp")
    }, 500);
}

// Display loader in 3s
window.onload = () => {
    setTimeout(() => {
        loader.classList.add("loader--fadeOut")
    } ,2500)
    setTimeout(() => {
        loader.classList.add("loader--hide")
    } ,3000)
}

// ADD ANIMATION TO SLIDER SECTION
const observerSlider = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            setTimeout(() => {
                document.querySelector(".desc__heading").classList.add("fadeFromTop")
                document.querySelector(".desc__words").classList.add("fadeFromBottom")
                document.querySelector(".btn.btn--transparent").classList.add("fadeScaleSmall")
            }, 3000)
        }
    })
})

observerSlider.observe(slider)