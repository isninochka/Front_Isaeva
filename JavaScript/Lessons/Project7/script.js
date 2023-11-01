// const item = document.querySelector(".item-1")
// item.addEventListener("click", function(){
//   console.log("Клик")
// })
// const item1 = document.querySelector(".item-1")
// const texts = document.querySelectorAll(".item-1 p")
// item1.addEventListener("click", function(){
// texts.forEach(function(text){
//     text.classList.toggle("hidden")
//         })
//   })
//   const item2 = document.querySelector(".item-2")
// const texts2 = document.querySelectorAll(".item-2 p")
// item2.addEventListener("click", function(){
// texts2.forEach(function(text){
//     text.classList.toggle("hidden")
//         })
//   })
  const divs = document.querySelectorAll("div")
     divs.forEach(function(div){
        div.addEventListener("click",function(){
           const texts =  div.querySelectorAll("p")
       texts.forEach(function(text){
        text.classList.toggle("hidden")

       })
      })
  })
 
