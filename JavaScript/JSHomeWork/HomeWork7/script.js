console.log("Задача 1")
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
 function minNumber(number1, number2) {
    if (number1 < number2)
    console.log(`Наименьшее число -  ${number1}` )
} minNumber(3,6)
 
console.log("Задача 2")
//  Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа
//  от большего к меньшему. (Видимо, задача написана не корректно)
// function evenNumbers(num1, num2) {
//    if (num1 % 2 === 0 && num2 % 2 === 0) {
//     if(num1>num2){
//         console.log(num1,num2)
//     }else {
//         console.log(num2,num1)
//     }
//    } else if (num1 % 2 === 0 && num2 % 2 !== 0) {
//     console.log(num1)
//    } else {
//     console.log(num2)
//     }
// }evenNumbers(15,20)
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа
//  от большего к меньшему //(дописала сама условие задачи) в промежутке между данными числами.
function evenNumbers(num1,num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}evenNumbers(10,20)
 
console.log("Задача 3")
//  Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
//  и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(number, exponent = 2) {
    const expNum = number ** exponent
    console.log(expNum)
}power(2,3)
 
console.log("Задача 4")
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function numbersSum(n) {
    console.log(n*(n+1)/2)
}numbersSum(5)

console.log("Задача 5")
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных
// чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function calcSums(n, m) {
let evenSum = 0
let oddSum = 0
for (let i = n; i <=m; i++){
    if (i % 2 === 0){
        evenSum += i
    } else {
        oddSum +=i
    }
}console.log ("Сумма четных чисел: ", evenSum)
console.log ("Сумма нечетных чисел: ", oddSum)
}calcSums(2,20)

console.log("Задача 6")
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый
// длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько 
// одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function longElem(array) {
    if (array.lenght === 0) {
        console.log ("null")
    }
    let longEl = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]>longEl){
            longEl = array[i]
        }
    }console.log(longEl)
}
const array = ["один","два","три","четыре","пять"]
longElem(array)


