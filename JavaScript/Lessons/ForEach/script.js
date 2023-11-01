
// const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     }
//     console.log("Если нужно обратиться ко всем элемантам массива то можно обратиться любым способом");
// names.forEach(function(name){
//     console.log(name);
// })
// names.forEach(function(name, index,array){
//     console.log(name);
//     console.log(index);
//     console.log(array);
// })

// const numbers = [10, 5, 18, 21, 5, 7]
// numbers.forEach(function(number){
//        console.log(number**2);
//     })

    // const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]   
    // const div = document.querySelector("div")
    // names.forEach(function(name){
    //       div.insertAdjacentHTML("beforeend",`<p>${name}</p>`)
    //     })
        // const div = document.querySelector("div")
        // div.insertAdjacentHTML("beforeend",`<h1>${"Hello"}</h1>`)
        // div.innerText +="User"
        const products = [
            {
                name: "Молоко",
                price: 500
            },
            {
                name: "Гречка",
                price: 600
            },
            {
                name: "Масло",
                price: 850
            },
        ]
       
        products.forEach(function(product){
        document.body.innerHTML +=
        `<div>
            <h5>${product.name}</h5>
            <p>${product.price}</p>
        </div>`

        
  
        

        })
