// const title = document.querySelector("h1")
// // console.log(title.classList);
// title.classList.add("item")
// title.classList.remove("my-title")
// title.classList.toggle("item")
const todo = ["Сварить суп", "Сделать ДЗ", "Убраться дома", "Поваляться"]
const main = document.querySelector("main")
todo.forEach(function(to){
    main.innerHTML +=
        `<div class = "todo-item" >
            <h5>${to}</h5>
           </div>`
          
})
const todoCards = document.querySelectorAll(".todo-item")
todoCards.forEach(function(todoCard){
    todoCard.addEventListener("click", function(){
      todoCard.classList.add("active")
       

    })

})
 
