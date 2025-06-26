export function loadAbout() {
    const container = document.getElementById("content")
    container.innerHTML = ""
    container.style.display = "block"; // or "flex" if preferred
    container.style.backgroundColor = "inherit"; // reset from grey grid
    const p1 = document.createElement("p")
    p1.innerText = "Welcome to La Tavola — a cozy corner in Chabany where food feels like home."

    const p2 = document.createElement("p")
    p2.innerText = "Born from a passion for authentic Italian cuisine, La Tavola brings together the comfort of rustic meals, the joy of good company, and the heart of family tradition. Every dish is prepared with fresh, locally sourced ingredients and recipes passed down through generations."

    const p3 = document.createElement("p")
    p3.innerText = "We believe a meal should be more than just food — it should be an experience. Whether you’re joining us for a casual lunch, a romantic dinner, or weekend brunch with friends, we aim to make every visit special."


    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(p3)
}