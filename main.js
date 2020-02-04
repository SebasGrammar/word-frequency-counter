const input = document.querySelector(".input")
const submit = document.querySelector(".submit")

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

submit.addEventListener("click", function() {
    console.log(countWords(findWords(input)))
})

//console.log(input.split(" "))