const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")

const row = {
    rank: document.querySelector(".rank"),
    count: document.querySelector(".count"),
    word: document.querySelector(".word")
}

function findWords(text) {
    return text.value.split(/[\W]/).filter(word => word)
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

/*
function createElement(object, {count, word}) {

    for (let property in object) {

        let key = document.createElement("p")
        key.textContent = property
        word.appendChild(key)

        let value = document.createElement("p")
        value.textContent = object[property]
        count.appendChild(value)

        let rank = document.createElement("p")
        
    }
    
}
*/

function createElement(array, {count, word, rank}, object) {
    console.log(object)
    let index = 1

    for (let element of array) {

        let key = document.createElement("p")
        key.textContent = element
        word.appendChild(key)

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
    //console.log(countWords(findWords(input)))
    //console.log(sortObject(countWords(findWords(input))))

    let sortedObject = sortObject(countWords(findWords(input)))

    createElement(sortedObject, row, countWords(findWords(input)))

    input.value = ""
    
    //createElement(row)
})

//console.log(input.split(" "))