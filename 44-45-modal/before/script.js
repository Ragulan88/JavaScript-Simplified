/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const openBtn = document.querySelector("#open-modal-btn")
const closeBtn = document.querySelector("#close-modal-btn")
const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  modal.classList.add("open")
  overlay.classList.add("open")
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

closeBtn.addEventListener("click", closeAll) // not here that since there was duplicate code, it was made into a function and then added in as second argument

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

overlay.addEventListener("click", (e) => {
  modal.classList.remove("open")
  e.target.classList.remove("open") //nice, I am finally using e.target rather then overlay.classList
})

function closeAll() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}