import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

document.addEventListener("DOMContentLoaded", () => {
    loadMenu(); // ✅ now safe, after DOM is loaded

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const idBtn = e.target.id;
            if (idBtn === "about") {
                loadAbout();
            } else if (idBtn === "home") {
                loadHome();
            } else if (idBtn === "menu") {
                loadMenu();
            }
        });
    });
});

alert("Some bullshit!"); // just for debug
