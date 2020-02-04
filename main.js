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
    p: 3
}

// function test({rank, count, word}) {
//     let oe = document.createElement("div")
//     oe.classList.add("oe")
//     rank.appendChild(oe)
    
// }

// function createElement(object) {
//     for (let element in object) {
//         let thing = document.createElement("p")
//         thing.textContent = element
//         object[element].appendChild(thing)
//     }
// }

function test(object, {count, word}) {

    for (let thing in object) {
        console.log(thing)
        let p = document.createElement("p")
        p.textContent = thing
        word.appendChild(p)

        let c = document.createElement("p")
        c.textContent = object[thing]
        count.appendChild(c)
    }
    
}



/************************************/

submit.addEventListener("click", function () {
    console.log(countWords(findWords(input)))
    test(countWords(findWords(input)), row)
    
    //test(row)
})

//console.log(input.split(" "))