
function loadFooter() {
    const page = document.querySelector(".page");

    const footer = document.createElement("footer");
    footer.textContent = "Made by Aturnip 2023";
    
    page.appendChild(footer);
}

export {loadFooter}