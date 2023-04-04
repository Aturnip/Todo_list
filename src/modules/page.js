import { loadFooter } from "./footer";
import { loadHeader } from "./header";
import { loadMain } from "./main";

function loadHomePage() {
    const body = document.querySelector("body");

    const page = document.createElement("div");
    page.classList.add("page");

    body.appendChild(page);

    loadHeader();
    loadMain();
    loadFooter();
}

export {loadHomePage}