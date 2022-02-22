import _ from 'lodash';
import './styles.css';
import pic from './coffee.jpg';
import renderNavBar from './navbar.js';

const $content = document.getElementById("content");

console.log("Hello, Webpack");

function component () {
    const title = document.createElement('div');
    title.innerHTML = 'FALL INTO A CUP OF COFFEE';

    return title;
}


document.body.appendChild(component());

renderNavBar();
