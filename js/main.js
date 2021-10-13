// Initialize html objetcs
const themeText = document.querySelector('.theme .theme-txt');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

// Remove moon from display and set the click function to sun object
moon.style.display = "none";
sun.addEventListener('click', whiteTheme);
// changes to light theme
function whiteTheme() {

    document.querySelector('body').classList.add("white-theme");
    themeText.innerText = 'dark';
    sun.style.display = "none";
    moon.style.display = "block";
}

// changes to dark theme
moon.addEventListener('click', defaultTheme);
function defaultTheme() {

    document.querySelector('body').classList.remove("white-theme");
    themeText.innerText = 'light';
    moon.style.display = "none";
    sun.style.display = "block";
}



