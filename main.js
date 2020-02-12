const app = document.querySelector(".app")

const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")

const text = document.querySelector(".text")

const filter = document.querySelector(".filter")

const row = {
    rank: document.querySelector(".rank"),
    count: document.querySelector(".count"),
    word: document.querySelector(".word")
}

const conditions = {
    enabled: false,
}

let enabled = false

function findWords(text) {
    return text.value.split(/[\W]/).filter(word => word).map(word => word.toLowerCase())
}

function hide(element, className) {
    element.classList.toggle(className)
}

function countWords(array) {
    let words = {}
    for (let word of array) {
        words[word] ? words[word] ++ : words[word] = 1
    }
    return words
}

function sortObject(object) {
    return Object.keys(object).sort((x, y) => {return object[y] - object[x]})
}

let elements = {
    p: 3
}

function highlight(string) {

    text.innerHTML = text.textContent.replace(new RegExp(`\\b${string}\\b`, "gi"), `<span class="highlight">${string}</span>`)

}

function addFilter(array, filter) {
    return array.filter(word => !filter.includes(word))
}

function createElement(array, {count, word, rank}, object) {

    let index = 1

    for (let element of array) {

        let key = document.createElement("p")
        key.textContent = element
        word.appendChild(key)

        /* THIS IS TEMPORAL */

        console.log(text.textContent)

        key.addEventListener("click", function() {
            highlight(element)
        })

        /* */

        let value = document.createElement("p")
        value.textContent = object[element]
        count.appendChild(value)

        let position = document.createElement("p")
        position.textContent = index
        rank.appendChild(position)

        index ++
    }
    
}



/************************************/

submit.addEventListener("click", function () {

    /* REFACTOR THIS BEFORE MOVING ON */
    
    for (let property in row) {
        row[property].textContent = ""
    }

    //if (input.value && !enabled) {
    if (input.value && !conditions.enabled) {
        hide(app, "enabled")
        hide(results, "invisible")
        text.style.display = "block"
        conditions.enabled = true
    }

    text.textContent = input.value

    //let sortedObject = sortObject(countWords(findWords(input)))
    //console.log(countWords(findWords(input)))
    //addFilter(sortObject(countWords(findWords(input))), ["the"])


    //let sortedObject = addFilter(sortObject(countWords(findWords(input))), ["the"])
    //console.log(filter.value.split(","))

    let f = filter.value.split(",")
    console.log(f)
    //let sortedObject = addFilter(sortObject(countWords(findWords(input))), filter.value.split(""))
    let sortedObject = addFilter(sortObject(countWords(findWords(input))), f)
    //let sortedObject = addFilter(sortObject(countWords(findWords(input))), ["the"])
    //console.log(addFilter(sortObject(countWords(findWords(input))), filter.textContent.split(",")))
    createElement(sortedObject, row, countWords(findWords(input)))

    //input.value = ""



})

//console.log(input.split(" "))