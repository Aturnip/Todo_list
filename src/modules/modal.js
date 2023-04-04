
function loadModal() {
    const page = document.querySelector(".page");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal_content"); 

    modalContent.textContent = "Text in a modal";
    
    modal.appendChild(modalContent);
    page.appendChild(modal);
}

export {loadModal}
