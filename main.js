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


    let f = filter.value.split(",")
    console.log(f)

    let sortedObject = addFilter(sortObject(countWords(findWords(input))), f)

    createElement(sortedObject, row, countWords(findWords(input)))




})

/*

// There is an issue with texts containing HTML tags, like the one below.
// These tags get rendered on the "text" div, so when you highlight, say, the word
// label, what will actually happen is that you're going to have a bunch of label elements in the text.

Associating a <label> with an <input> element offers some major advantages:

The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means that, for example, a screenreader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.
You can click the associated label to focus/activate the input, as well as the input itself. This increased hit area provides an advantage to anyone trying to activate the input, including those using a touch-screen device.
To associate the <label> with an <input> element, you need to give the <input> an id attribute. The <label> then needs a for attribute whose value is the same as the input's id.

Alternatively, you can nest the <input> directly inside the <label>, in which case the for and id attributes are not needed because the association is implicit:

*/