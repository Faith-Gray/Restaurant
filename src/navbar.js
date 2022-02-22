//import { $content, createHtmlElement } from "./index";
import { $content } from "./index.js";

export function renderNavBar() {
    const navBarItems = ["Home", "About", "Contact Us"];
    const list = document.createElement('ul');
    
    list.forEach((navBarItems) =>
    list.appendChild(navBarItems));

    const divd = document.createElement('div');
    divd.style.color = "white";
    divd.style.height = "100px";
    divd.style.width = "50px";

    $content.appendChild(divd());

};
