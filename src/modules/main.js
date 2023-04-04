import { loadModal } from "./modal";

function loadMain() {
    const page = document.querySelector(".page");

    const main = document.createElement("div");
    main.classList.add("main");
    
    page.appendChild(main);
    loadModal();
    loadButton();
    showModal();
}

function loadButton() {
    const main = document.querySelector(".main");

    const addButton = document.createElement("button");
    addButton.classList.add("btn")
    addButton.textContent = "Add a todo";
    main.appendChild(addButton);
}

function showModal() {
    const button = document.querySelector(".btn");
    const modal = document.querySelector(".modal");

    button.addEventListener("click", () => {
        modal.style.display = "block";
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    })
}

export {loadMain}