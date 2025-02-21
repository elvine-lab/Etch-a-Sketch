const container = document.getElementById("container")
const resetButton = document.getElementById("reset")
function createGrid (size) {
    container.innerHTML = ""

    let squareSize = 960 / size

    for (let i = 0; i < size *size; i++){
        const div = document.createElement("div")
        div.classList.add("square")
        div.style.width = `${squareSize}px`
        div.style.height = `${squareSize}px`

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black"
        })

        container.appendChild(div)

    }

}

resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max 100): ", 16)

    if (newSize !== null) {
        newSize = parseInt(newSize)
        if (newSize > 0 && newSize <= 100){
            createGrid(newSize)
        } else {
            alert("Please enter valid number between 1 and 100.")
        }
    }
})

createGrid(16)


