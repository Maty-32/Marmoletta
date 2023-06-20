const contenedor = document.querySelector(".contenedor");
const punto = document.querySelectorAll(".punto");
let counter = 0;

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener(`click`, () => {
    let posicion = i;
    let operacion = posicion * -20;

    contenedor.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove(`activo`);
    });
    punto[i].classList.add(`activo`);
  });
});

let index = 1
setInterval(() => {
   punto[index].click() 
   index++
   if (index==5) {
    index = 0
    contenedor.style.transition = `(transition: all 0.5s ease)`;
   }
}, 5000);


    
