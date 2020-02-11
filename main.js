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
    console.log(words) //.sort((x, y) => {return x - y}))
    return words //.sort((x, y) => {return x - y})
}

function sortObject(object) {
    console.log(Object.keys(object).sort((x, y) => {return object[y] - object[x]}))
}

/* CONVOLUTED ON PURPOSE - I'M GOING TO REFACTOR LATER ON. FOR NOW, I'LL JUST createElement A FEW THINGS */

let elements = {
    p: 3
}

// function createElement({rank, count, word}) {
//     let oe = document.createElement("div")
//     oe.classList.add("oe")
//     rank.appendChild(oe)
    
// }

// function createElement(object) {
//     for (let element in object) {
//         let property = document.createElement("p")
//         property.textContent = element
//         object[element].appendChild(property)
//     }
// }

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



/************************************/

submit.addEventListener("click", function () {
    //console.log(countWords(findWords(input)))
    sortObject(countWords(findWords(input)))
    createElement(countWords(findWords(input)), row)
    
    //createElement(row)
})

//console.log(input.split(" "))