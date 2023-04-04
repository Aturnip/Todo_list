
function loadHeader() {
    const page = document.querySelector(".page");

    const header = document.createElement("div");
    header.classList.add("header")
    header.textContent = "Your Todo List";

    page.appendChild(header);
}

export {loadHeader}