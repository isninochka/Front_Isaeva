// const number = 100
// const arr = []
// const names = ["Arsen","Vlad","Alina","Artem"]
// const array = ["Arsen", 100, ["Hello", "World"], number]
// console.log(array)
// console.log(array[1]) /*Hello*/
// console.log(array[2][0], array[0])/*Hello Arsen*/
// const numbers = [1,2,3,4]
// numbers.push(10, [20,30,40])
// console.log(numbers)
// const names = ["Vlad", "Iren", "Dmitrii"]
// names.push("Arsen")
// console.log(names)

// names.pop()
// console.log(names)
// const numbers = []
// const num1 = +prompt("Введите первое число")
// const num2 = +prompt("Введите второе число")

// numbers.push(num1)
// numbers.push(num2)
// console.log (`Ваш массив выглядит так: `, numbers)

// const names = ["Arsen", "Vlad", "Olga", "Irina", "Dmitrii", "Artem"]

// for(let i=0;i < names.length; i++){
//         console.log(`Привет, ${names[i]}`)
// }

// const numbers =  [-100, 0, 50, -20, 0, 15, 25, -40]

// for (i = 0; i < numbers.length; i++){
//     if (numbers[i] > 0)
//     console.log(numbers[i])
// }
// const numbers = [10,17,11,21,40,501,50,46]
// for (let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//     }
// }
const numbers = [10,17,11,21,40,501,50,46]
let sum1 = 0
let sum2 = 0
for (let i=0; i<numbers.length; i++){
if(numbers[i] % 2 == 0){
 sum1 = sum1+numbers[i]
 } else {
    sum2 =sum2+numbers[i]
 }
}
if(sum1>sum2){
    
console.log(sum1-sum2)
} else {
console.log(sum2-sum1)
}