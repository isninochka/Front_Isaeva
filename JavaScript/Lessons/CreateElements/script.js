// const title = document.createElement("h1")
// title.innerText = "Это мой заголовок"
// const header = document.querySelector("header")
// header.append(title)
// const tagName = document.createElement("p")
// tagName.innerText = "Какой то день"
// const header = document.querySelector(".item")
// header.append(tagName)
// const item = document.querySelector(".item")
// item.insertAdjacentHTML("afterbegin",`<div>
//                         <p>Hello World</p>
//                         <p>Hello World</p>
//                                     </div>`)


// const item = document.querySelector(".item")
// for (let i = 0; i < 20; i++) {
//     console.log(i);
//     const paragraph = document.createElement("p")
//     paragraph.innerText = i
//     item.append(paragraph)
//  }
//  for (let i = 0; i < array.length; i++) {
//     item.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
    
//  }
// const names = ["Arsen", "Artem", "Vlad", "Alina","Iren"]
// const item = document.querySelector(".item")
// for (let i = 0; i < names.length; i++) {
//     item.insertAdjacentHTML("beforeend", `<p style = "font-family: Arial; color: violet">${names[i]}</p>`)
// }
// const text = "Hello World"
// const pfaragraph = "My name is Nina"
// const header = document.querySelector("header")
// header.insertAdjacentHTML("beforeend", `<h1>${text}</h1><p>${pfaragraph}</p>`)

const products = [
    {
        name: "Молоко",
        price: 500
    },
    {
        name: "Гречка",
        price: 700
    },
    {
        name: "Масло",
        price: 600
    },
    {
        name: "Вода",
        price: 100
    },
    {
        name: "Мука",
        price: 350
    },
]
const item = document.querySelector(".item")
// item.insertAdjacentHTML("beforeend", `<div><h5>${products[0].name}</h5>
//                                         <p>${products[0].price}</p></div>
//                                       <div>  <h5>${products[1].name} </h5>
//                                       <p>${products[1].price}</p></div> `)
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name)
    item.insertAdjacentHTML("beforeend", `<div class = "product">
                                        <h5>${products[i].name}</h5>
                                        <p>${products[i].price}</p>
                                        </div>` )
    }