export function loadMenu() {
    const container = document.getElementById("content")
    container.innerHTML = ""

    const food = ["pizza", "pasta", "fruits", "veggies"]

    for (let dish of food) {
        const menuItem = document.createElement("div")
        menuItem.innerText = dish
        menuItem.style.width = "100%";
        menuItem.style.height = "100%";
        menuItem.style.display = "flex";
        menuItem.style.alignItems = "center";
        menuItem.style.justifyContent = "center";
        menuItem.style.border = "1px solid black";
        menuItem.style.backgroundColor = "white"
        container.appendChild(menuItem)

    }


    container.style.display = "grid"
    container.style.gridTemplateRows = "repeat(3, 150px)"
    container.style.gridTemplateColumns = "repeat(3, 150px)"
    container.style.padding = "24px"
    container.style.gap = "10px";
    container.style.justifyItems = "center";
    container.style.backgroundColor = "grey"


}