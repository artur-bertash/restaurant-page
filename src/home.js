import ImageSrc from './image.png';
export function loadHome() {
    const container = document.getElementById("content")
    container.innerHTML = ""
    container.style.display = "block"; // or "flex" if preferred
    container.style.backgroundColor = "inherit"; // reset from grey grid


    const h1 = document.createElement("h1")
    h1.textContent = "The best restaurant in Chabany!"

    const img = document.createElement("img")
    img.src = ImageSrc
    img.alt = "Restaurant Image"

    const description = document.createElement('p');
    description.textContent = 'At La Tavola, we bring the warmth of rustic Italian dining to your table — fresh ingredients, handmade pasta, wood-fired pizza, and recipes passed down through generations.';

    const hours = document.createElement('p');
    hours.textContent = 'Monday – Friday: 11:00 AM – 10:00 PM\nSaturday – Sunday: 9:00 AM – 11:00 PM (Brunch served until 2 PM)';

    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(description);
    container.appendChild(hours);


}
