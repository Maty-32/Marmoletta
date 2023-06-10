const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slider = document.querySelector(".contenedor-carrucel")

prev.addEventListener("click", () => {
    slider.scrollLeft -= 1000
})

next.addEventListener("click", () => {
    slider.scrollLeft += 1000
})