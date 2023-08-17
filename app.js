const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
close.onclick = function () {
  list.classList.remove('is-opened');
}
menu.onclick = function () {
  list.classList.toggle('is-opened');
}

const icon = document.querySelector('.icon');
icon.onclick = function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = "images/sun.png"
    } else {
        icon.src = "images/moon.png"
    }
}