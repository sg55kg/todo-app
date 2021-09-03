import './styles.css';

const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header')

    const headerText = document.createElement('h1');

    headerText.innerText = 'To Do';

    const navButton = document.createElement('button');
    navButton.setAttribute('id', 'nav-button');

    navButton.addEventListener('click', () => {
        openNav();
    })


    header.appendChild(navButton);
    header.appendChild(headerText);

    return header;
}

const createNavBar = () => {
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'sidenav');

    const closeNavBtn = document.createElement('button');
    closeNavBtn.setAttribute('id', 'close-nav-btn');
    closeNavBtn.innerText = 'X';

    closeNavBtn.addEventListener('click', () => {
        closeNav();
    })

    navBar.appendChild(closeNavBtn);


    return navBar;
}

const openNav = () => {
    const navBar = document.getElementById('sidenav');
    const content = document.getElementById('content');
    navBar.style.display = 'block';
    content.style.marginLeft = '12em';
}

const closeNav = () => {
    const navBar = document.getElementById('sidenav');
    const content = document.getElementById('content');
    navBar.style.display = 'none';
    content.style.marginLeft = '0';
}

const createBody = () => {
    const body = document.createElement('div');
    body.setAttribute('id', 'body');
    body.innerText = 'body';
    
    return body;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.innerText = 'footer';

    return footer;
}

const init = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createBody());
    content.appendChild(createFooter());
}

init();