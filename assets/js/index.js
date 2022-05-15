// let slider = document.querySelector(".slider")
// let content = document.querySelector(".content")
// let footer = document.querySelector(".footer-section")
let header = document.querySelector(".header-wrapper")
let searchBtn = document.getElementById("searchBtn")
let searchSection = document.querySelector(".search-section")
let searchCloseBtn = document.querySelector(".search-section__close")
let searchInput = document.querySelector(".search-section__input")
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


window.onwheel = e => {
    if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        header.classList.add("header--hide")
    } else {
        // Scrolling Up with mouse
        header.classList.remove("header--hide")
    }
}

searchBtn.onclick = () => {
    searchSection.classList.add("search-section--display")
}

searchCloseBtn.onclick = () => {
    searchSection.classList.remove("search-section--display")
    searchInput.value = ""
}