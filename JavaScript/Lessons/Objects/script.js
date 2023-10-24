// const user ={}
// const doctor = {
//     name: "Arsen",
//     prof: "Dantist",
//     exp: 20,
//     skills: ["terapeut", "orhtodont","implantolog"],
//     age: 45,
//     room: {
//         terapevt: ["rentgen-apparat", "bor-mashine"],
//         orthodont: ["operacions"]
//     },
//     schedule: {
//         monday: ["9:00", "15:00"],
//         tuesday: ["10:00", "16:00"],

//     }
// }
// const product = {
//     name: "moloko",
//     price: 500,
// }
// console.log(`В магазине нужно ${product.name} купить продукт, по цене ${product.price}`)

const products = [
{
    name: "moloko",
    price: 500,
},
{
    name: "maslo",
    price: 400,
},
{
    name: "bulgur",
    price: 700,
}

]
// console.log(`В магазине нужно ${product[0].name}  купить продукт, по цене ${product[0].price}`)
// console.log(`В магазине нужно ${product[1].name}  купить продукт, по цене ${product[1].price}`)
let sum = 0
for (let i = 0; i < products.length; i++) {
    // console.log(`В магазине нужно ${products[i].name}  купить продукт, по цене ${products[i].price}`)
 sum = sum + products[i].price
}
console.log(sum)
