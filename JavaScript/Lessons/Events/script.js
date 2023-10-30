// const button = document.querySelector(".btn")
// button.addEventListener("click",function(){
//     console.log("На меня кликнули");
// })
// const button = document.querySelector(".btn")
// const buttonMinus = document.querySelector(".minus")
// const title =document.querySelector("h1")
// let counter = 0
// button.addEventListener("click",function(){
//     //    console.log(counter++);
//        title.innerText=counter++
// })
// buttonMinus.addEventListener("click",function(){
//     // console.log(counter--);
//     title.innerText=counter--
// })
// const div = document.querySelector(".item")
// const buttonRed = document.querySelector(".red")
// const buttonBlue = document.querySelector(".blue")
// const buttonGreen = document.querySelector(".green")
// const buttonYellow = document.querySelector(".yellow")
// buttonRed.addEventListener("click",function(){
//     div.style.backgroundColor = "red"
// })
// buttonBlue.addEventListener("click",function(){
//     div.style.backgroundColor = "blue"
// })
// buttonGreen.addEventListener("click",function(){
//     div.style.backgroundColor = "green"
// })
// buttonYellow.addEventListener("click",function(){
//     div.style.backgroundColor = "yellow"
// })
const div = document.querySelector(".item")
const buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener("click", function(event){
        console.log(event.target.className)
       div.style.backgroundColor = event.target.className
    })}