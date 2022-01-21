import './styles.css'
console.log("Hello, Webpack");

function add() {
    const element = document.createElement('div');
    element.innerHTML= "I hate this";
    return element;
}
document.body.appendChild(add);