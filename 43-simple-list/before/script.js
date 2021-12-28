// Select all items
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")
const form = document.querySelector("#new-item-form") //using form rather then the submit button

// When I submit the form add a new element
form.addEventListener("submit", e => { // and then here using the submit event listener rather than the click event listener
    e.preventDefault();

    // create item
    const item = document.createElement("div")
    item.innerText = input.value // NB that nodeValue doesn't work, just keep it simple with .value
    
    // add item to list
    list.append(item); // using .append rather then .appendChild for both simplicity and it works better too, I think, there is a YouTube video on this
    
    // add class to give it styling
    item.classList.add("list-item")

    // clear input
    input.value = ""

    // set up event listener to delete item when clicked
    item.addEventListener("click", () => {
        item.remove()
    })

})