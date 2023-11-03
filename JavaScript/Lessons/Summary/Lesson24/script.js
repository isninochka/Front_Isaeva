// function greeting() {
//     console.log("hello")
// }
// greeting()

// const posts = [
//     {
//         title: "My first title",
//         descr: "My first descr",
//         likes: 100
//     },
//     {
//         title: "My second title",
//         descr: "My second descr",
//         likes: 50
//     }, 
//     {
//         title: "My third title",
//         descr: "My third descr",
//         likes: 120
//     }
// ]
// posts.forEach(function(post){
//     if(post.likes>70){
//             console.log(`Заголовок: ${post.title} Описание:  ${post.descr}` )
//     }
    
// })

// const item = document.querySelector(".item")
// item.addEventListener("click", function(){
//    item.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`})
    

//    function getRandomNumber() {
//     const RandomNumber = Math.floor(Math.random()*256)
//     return RandomNumber
//        }
//        const item = document.querySelector(".item")
// item.addEventListener("mouseover", function(){
//     item.classList.add("mouseover")
// })
// item.addEventListener("mouseout", function(){
//     item.classList.add("mouseout")
// })

const form = document.querySelector("form")
const userName = document.querySelector(".user-name")
const userAdresse = document.querySelector(".user-address")
const userAge = document.querySelector(".user-age")
form.addEventListener("submit", function(event){
    event.preventDefault()
      const newUser ={
        name: userName.value,
        adress: userAdresse.value,
        age: userAge.value
    }
console.log(newUser)
})