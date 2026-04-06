const clickMeButton = document.getElementById('click-me')
clickMeButton.addEventListener('click', sayHello)


function sayHello() {
    alert('Hi from Nginx static site!');
}
