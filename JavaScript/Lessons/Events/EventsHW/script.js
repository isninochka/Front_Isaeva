// let divSmallFotos = document.querySelectorAll(`.smallFotos`)
// let bigFoto = document.querySelector(`.bigFoto`)

// // const divBigFotos = document.querySelector (".divBigFotos")
// // const smallFotos =  document.querySelectorAll (".img")


// for (let i = 0; i < divSmallFotos.length; i++) {
//     divSmallFotos[i].addEventListener("click", function(){
//         let divSmallFotos = document.querySelectorAll(`.smallFotos`).src
   
//     srcFotos = bigFoto.setAttribute(`src`)
   
//     })}
const smallFotos = document.querySelectorAll(".small img")
const bigFoto = document.querySelector(".bigFoto")

for (let i = 0; i < smallFotos.length; i++) {
    smallFotos[i].addEventListener("click", function(event){
       const srcFotos = event.target.getAttribute("src")
       bigFoto.setAttribute("src", srcFotos)
    })
    
}
