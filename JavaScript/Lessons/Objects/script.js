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

// const products = [
// {
//     name: "moloko",
//     price: 500,
// },
// {
//     name: "maslo",
//     price: 400,
// },
// {
//     name: "bulgur",
//     price: 700,
// }

// ]
// console.log(`В магазине нужно ${product[0].name}  купить продукт, по цене ${product[0].price}`)
// console.log(`В магазине нужно ${product[1].name}  купить продукт, по цене ${product[1].price}`)
// let sum = 0
// for (let i = 0; i < products.length; i++) {
//     // console.log(`В магазине нужно ${products[i].name}  купить продукт, по цене ${products[i].price}`)
//  sum = sum + products[i].price
// }
// console.log(sum)

// for (let i = 0; i < products.length; i++){
//     if (products[i].price >= 500 ) {
//         console.log(products[i].name)
//     }
// }
// const user ={
//     name: "Arsen",
//     age: 25,
//     skills: ["html","css", "js"]
// }
// const {name, age, skills} = user
// console.log(name)
// console.log(age)
// console.log(skills)
// for (let i = 0; i < products.length; i++){
//     const {name,price}= products[i]
//         if (price >= 500 ) {
//             console.log(products[i].name)
//         }
//     }
const products = [
    {
        name: "ACER",
        model: "G500",
        price: 50000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "G200",
        price: 45000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "T237",
        price: 60000,
        category: "TV"
    },
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    },
    {
        name: "Lenovo",
        model: "T700",
        price: 65000,
        category: "TV"
    }
]
// for (let i = 0; i < products.length; i++){
//     const discountPrice = products[i].price - (products[i].price*0.1)
//        console.log(`${products[i].name} цена со скидкой ${discountPrice}`)
// }
// for (let i = 0; i < products.length; i++){
//     const {name,model,price,category}= products[i]  
//     console.log(`Название - ${name}, 
//     Модель - ${model}, 
//     Цена - ${price} , 
//     Категория - ${category}`)
// }
// for (let i = 0; i < products.length; i++){
//     const {name,model,price,category}= products[i]
//     if(category =="TV"){ 
//     console.log(`Название - ${name}, 
//     Модель - ${model}, 
//     Цена - ${price} , 
//     Категория - ${category}`)
// } 
// }
const productsTv = []
for(let i = 0; i < products.length; i++) {
    const {name, price, model, category} = products[i]
    if(category == "TV") {
        productsTv.push({name, price, model})
        }
}
console.log(productsTv)