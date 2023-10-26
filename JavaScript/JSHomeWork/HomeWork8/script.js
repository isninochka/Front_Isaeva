console.log("Задача 1")
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const body = document.querySelector("body")
body.insertAdjacentHTML("beforeend", `<div class = "numbers"></div>`)
const paragraph = document.querySelector(".numbers")
for (let i = 100; i >= 50; i = i-10) {
    console.log(i);
    paragraph.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
}
console.log("Задача 2")
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div
// с классом strings_container. Строки взять произвольные.
const strings = ["Программисты", "это", "устройства,","преобразующие","кофеин","в код" ]
body.insertAdjacentHTML("beforeend", `<div class = "strings_container"></div>`)
const container = document.querySelector(".strings_container")
for (let i = 0; i < strings.length; i++) {
   container.insertAdjacentHTML("beforeend",`<p>${strings[i]}</p>`)
}
console.log("Задача 3")
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age 
// (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна 
// содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом 
// users_container.
body.insertAdjacentHTML("beforeend", `<div class = "users_container"></div>`)
const users = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 23,
    },
    {
        first_name: "Alexandra",
        last_name: "Alexandrova",
        age: 38,
    },
    {
        first_name: "Petr",
        last_name: "Petrov",
        age: 38,
    },
    {
        first_name: "Andrei",
        last_name: "Andreev",
        age: 16,
    },
        {
        first_name: "Sergey",
        last_name: "Sergeev",
        age: 27,
    }
]
const usersCont = document.querySelector(".users_container")
for (let i = 0; i < users.length; i++) {
    if (users[i].age>=18){
        usersCont.insertAdjacentHTML("beforeend", `<p>${users[i].first_name}
                                                    ${users[i].last_name}
                                                    ${users[i].age}</p>`)
    }
}






