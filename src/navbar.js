function renderNavBar() {
    // function createMenuItem(name) {
    //     let li = document.createElement('li');
    //     li.textContent = name;
    //     return li;
    // }

    // const navBar = document.createElement('ul');

    // navBar.appendChild(createMenuItem('Home'));
    // navBar.appendChild(createMenuItem('About'));
    // navBar.appendChild(createMenuItem('Contact Us'));

    const container = document.createElement('div');

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.textContent='home';

    container.appendChild(home);


    navBar.style.color = "white";
    navBar.style.height = "100px";
    navBar.style.width = "50px";



    return container;
};

export default renderNavBar;