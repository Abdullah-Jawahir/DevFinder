const themeText = document.querySelector('.theme .theme-txt');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

moon.style.display = "none";
sun.addEventListener('click', whiteTheme);
function whiteTheme() {

    document.querySelector('body').classList.add("white-theme");
    themeText.innerText = 'dark';
    sun.style.display = "none";
    moon.style.display = "block";
}

moon.addEventListener('click', defaultTheme);
function defaultTheme() {

    document.querySelector('body').classList.remove("white-theme");
    themeText.innerText = 'light';
    moon.style.display = "none";
    sun.style.display = "block";
}
