const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")

function findWords(text) {
    return text.value.split(/[\W]/).filter(word => word)
}

function countWords(array) {
    let words = {}
    for (let word of array) {
        words[word] ? words[word]++ : words[word] = 1
    }
    return words
}

/* CONVOLUTED ON PURPOSE - I'M GOING TO REFACTOR LATER ON. FOR NOW, I'LL JUST TEST A FEW THINGS */

let elements = {
    p: 4
}

function test(thing) {
    let row = document.createElement("div")
    for (let element in thing) {
        let counter = 0;
        console.log(element)
        while (counter < thing[element]) {
            //console.log(element)
            let object = document.createElement(element)
            object.textContent = element
            row.appendChild(object)
            counter ++
        }
    }
    return row
}

function createRow(container, child) {
    container.appendChild(child)
}

function createTable(object, container) {
    for (let word in object) {
        createRow(container, test(elements))
    }
}

/************************************/

submit.addEventListener("click", function () {
    //console.log(countWords(findWords(input)))
    //console.log(test(countWords(findWords(input))))
    createTable(test(countWords(findWords(input))), results)
})

//console.log(input.split(" "))