// Есть массив из объектов. В каждом объекте есть строки на ру и анг. 
// Для каждого объекта отрисовать разметку 
// При нажатии на каждую карточку переключать слова с английского на русский и наоборот
// Создать две кнопки. RU и EN. 
// при нажатии на RU должны отображать только русские слова
// при нажатии на EN только английские
const strings = [
    {
        en: "Car",
        ru: "Машина"
    },
    {
        en: "book",
        ru: "Книга"
    },
    {
        en: "hello",
        ru: "Привет"
    }
]
/*
     <div class="item">
        <p class="hidden">{Английское слово}</p>
        <p>{Русское слово}</p>
    </div>
*/
const item = document.querySelector(".item")
strings.forEach(function(string){
    item.insertAdjacentHTML("beforeend", `<p class="hidden enText">${string.en}</p>
                                            <p class = "ruText">${string.ru}</p>`)
})
const buttons = document.querySelector(".buttons")
buttons.insertAdjacentHTML("beforeend", `<button class="en">EN</button> 
<button class="ru">RU</button>`)

const en = document.querySelector(".en")
const ru = document.querySelector(".ru")

en.addEventListener("click", function(){
    const ruTexts =  item.querySelectorAll(".ruText")
    const enTexts =  item.querySelectorAll(".enText")
    ruTexts.forEach(function(text1){
        text1.classList.add("hidden")
        text2.classList.remove("hidden")
               })
       
        enTexts.forEach(function(text2){
            text2.classList.add("hidden")
            text.classList.remove("hidden")

            })
    })
  
   


