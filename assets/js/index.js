const slider = document.querySelector(".slider")
const header = document.querySelector(".header-wrapper")
const searchBtn = document.getElementById("searchBtn")
const searchSection = document.querySelector(".search-section")
const searchCloseBtn = document.querySelector(".search-section__close")
const searchInput = document.querySelector(".search-section__input")
const searchOutZone = document.querySelectorAll(".search-section__outsideZone")
const goToTopBtn = document.querySelector(".goToTop-section")
const menuMobile = document.querySelector(".navbar--mobile")
const menuMobileBtn = document.querySelector(".mobile-menu")
const menuMobileOverlay = document.querySelector(".navbar__overlay--mobile")
const menuMobileList = document.querySelector(".navbar__list--mobile")
const menuMobileOutZone = document.querySelector(".navbar__list-outzone--mobile")
const menuMobileClose = document.querySelector(".navbar__close-btn--mobile")
const loader = document.querySelector(".loader")

// window.onwheel = e => {
//     if(e.deltaY >= 0){
//         // Scrolling Down with mouse
//     } else {
//         // Scrolling Up with mouse
//     }
// }
window.addEventListener('scroll', () => {
  const scroll = this.scrollY;
  if (scroll !== 0) {
    goToTopBtn.style.opacity = '1';
    goToTopBtn.style.cursor = 'pointer';
  } else {
    goToTopBtn.style.opacity = '0';
    goToTopBtn.style.cursor = 'auto';
  }
});

// Catch Scroll up and down
window.onwheel = e => {
    if (e.deltaY >= 0) {
        // Scrolling Down with mouse

        // Hide header
        header.classList.add("header--hide")

        // Hide Go to Top button
        // goToTopBtn.classList.remove("goToTop--hide")
    }
    else {
        // Scrolling Up with mouse

        // Display header
        header.classList.remove("header--hide")

    }

    // If the screen on top
    // if (window.pageYOffset === 0) {
    //     // Hide go to top button
    //     goToTopBtn.classList.add("goToTop--fadeAway")
    //     goToTopBtn.classList.add("goToTop--hide")
    // }
}

goToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    header.classList.remove("header--hide")
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

// Hide SEARCH SECTION if click outside the input box
searchOutZone.forEach((item) => {
    item.onclick = () => {
        searchSection.classList.remove("search-section--display")
        searchInput.value = ""
    }
})

searchInput.onclick = () => {
    searchSection.classList.add("search-section--display")
}

menuMobileBtn.onclick = () => {
    // Display NAVBAR MOBILE
    menuMobile.classList.add("navbar--mobile_popUp")
    menuMobileOverlay.classList.add("navbar__overlay--mobile_display")
    menuMobileList.classList.add("navbar__list--mobile--display")
}

// Hide NAVBAR MOBILE if click on CLOSE Button
menuMobileClose.onclick = () => {
    menuMobileList.classList.remove("navbar__list--mobile--display")
    setTimeout(()=>{
        menuMobileOverlay.classList.remove("navbar__overlay--mobile_display")
    },300)
    setTimeout(() => {
        menuMobile.classList.remove("navbar--mobile_popUp")
    }, 500);
}

// Hide NAVBAR MOBILE if click outside NAVBAR
menuMobileOutZone.onclick = () => {
    menuMobileList.classList.remove("navbar__list--mobile--display")
    setTimeout(()=>{
        menuMobileOverlay.classList.remove("navbar__overlay--mobile_display")
    },300)
    setTimeout(() => {
        menuMobile.classList.remove("navbar--mobile_popUp")
    }, 500);
}

// Hide NAVBAR MOBILE if press ESC
window.onkeydown = e => {
    if(e.key === "Escape"){
        if(menuMobile.classList.contains("navbar--mobile_popUp")){
            menuMobileList.classList.remove("navbar__list--mobile--display")
            setTimeout(()=>{
                menuMobileOverlay.classList.remove("navbar__overlay--mobile_display")
            },300)
            setTimeout(() => {
                menuMobile.classList.remove("navbar--mobile_popUp")
            }, 500);
        }   

        if(searchSection.classList.contains("search-section--display")){
            searchSection.classList.remove("search-section--display")
            searchInput.value = ""
        }
    }

}

// OVERFLOW SCROLLBAR WHEN LOADING PAGE
document.getElementsByTagName("body")[0].style.height = 100 + "vh"
document.getElementsByTagName("body")[0].style.width = 100 + "vw"
document.getElementsByTagName("body")[0].style.overflow = "hidden"
setTimeout(() => {
    document.getElementsByTagName("body")[0].removeAttribute("style")
    
},3000)

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
