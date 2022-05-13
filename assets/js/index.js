// let slider = document.querySelector(".slider")
// let content = document.querySelector(".content")
// let footer = document.querySelector(".footer-section")
let header = document.querySelector(".header-wrapper")
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
    if(e.deltaY >= 0){
        // Scrolling Down with mouse
        header.classList.add("header--hide")
    } else {
        // Scrolling Up with mouse
        header.classList.remove("header--hide")
    }
}