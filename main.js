const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")

const text = document.querySelector(".text")

const row = {
    rank: document.querySelector(".rank"),
    count: document.querySelector(".count"),
    word: document.querySelector(".word")
}

function findWords(text) {
    return text.value.split(/[\W]/).filter(word => word).map(word => word.toLowerCase())
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

// function highlight(text, string) { // this right here is a good example of passing by value! i was expecting the function to mutate the text element, but it doesn't!
//     console.log(text.textContent)
//     console.log(text)
//     //text.textContent.replace(string, `<span class="highlight">${string}<span>`)
// }

function highlight(string) {

    //text.innerHTML = text.textContent.replace(string, `<span class="highlight">${string}</span>`)
    // text.innerHTML = text.textContent.replace(new RegExp(string, "g"), `<span class="highlight">${string}</span>`)
    text.innerHTML = text.textContent.replace(new RegExp(string, "g"), `<span class="highlight">${string}</span>`)

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

    for (let property in row) {
        row[property].textContent = ""
    }

    text.textContent = input.value

    let sortedObject = sortObject(countWords(findWords(input)))

    createElement(sortedObject, row, countWords(findWords(input)))

    input.value = ""



})

//console.log(input.split(" "))