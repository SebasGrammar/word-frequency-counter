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
        words[word] ? words[word]++ : words[word] = 1
    }
    return words
}

/* CONVOLUTED ON PURPOSE - I'M GOING TO REFACTOR LATER ON. FOR NOW, I'LL JUST TEST A FEW THINGS */

let elements = {
    p: 4
}

function test({rank, count, word}) {
    let oe = document.createElement("div")
    oe.classList.add("oe")
    rank.appendChild(oe)
    
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
    //results.appendChild(test(countWords(findWords(input))))
    test(row)
})

//console.log(input.split(" "))