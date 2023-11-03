const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const products = [
    {
        name:"Велосипед",
        price: 40000
    },
    {
        name:"Самокат",
        price: 15000
    },
]

form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(productName.value)
    // console.log(productPrice.value)
    const newProduct ={
        name: productName.value,
        price: productPrice.value
    }
    products.push(newProduct)
    showProducts()

})
function showProducts(){

    const section =document.querySelector(".products")
    section.innerHTML = " "
    products.forEach(function(product){
        section.innerHTML +=
        `<div class ="product-card">
            <h5>${product.name}</h5>
            <p>${product.price}</p>
        </div>`
       })
}
/* <div class="product-card">
<h5 class="product-card-name">Велосипед</h5>
<p class="product-card-price">40000</p>
</div> */

showProducts()