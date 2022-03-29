// import _ from 'lodash';
import './styles.css';
import renderNavBar from './navbar.js';
import renderAbout from '.about.js';
import renderContact from './contact';
const $content = document.getElementById("content");

console.log("Hello, Webpack");

function component() {
    const title = document.createElement('div');
    title.innerHTML = 'FALL INTO A CUP OF COFFEE';

    return title;
}


document.body.appendChild(component());

document.body.appendChild(renderNavBar());
document.body.appendChild(renderAbout());
document.body.appendChild(renderContact());