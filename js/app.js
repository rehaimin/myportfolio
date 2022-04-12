const navCol = document.querySelector('.nav')
const nav = document.querySelector('nav');
const myProjectsBtn = document.querySelector('.main a');
const mainContainer = document.querySelector('.main-container');

function showSection(e) {

    e.preventDefault();
    let ident = e.target.getAttribute('key');
    let clickedLinkTarget = document.getElementById(ident);
    if (clickedLinkTarget.classList.contains('d-none')) {
        clickedLinkTarget.classList.remove('d-none');

        setTimeout(() => {
            if (!clickedLinkTarget.classList.contains('visible')) {
                clickedLinkTarget.classList.add('visible');
            }
        }, 10);
        let notClickedLinkTargets = document.querySelectorAll(".hidden:not([id='" + ident + "'])");

        notClickedLinkTargets.forEach(element => {

            element.classList.remove('visible');

        });
        setTimeout(() => {
            notClickedLinkTargets.forEach(element => {
                if (!element.classList.contains('d-none')) {
                    element.classList.add('d-none');
                }
            });
        }, 500);
    }
    if (window.innerWidth <= 768) {
        if (navCol.classList.contains('nav-display')){
            navCol.classList.toggle('nav-display')
        }
    }
    mainContainer.scrollTo(0, 0);

}

nav.addEventListener("click", showSection);
myProjectsBtn.addEventListener("click", showSection);

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    navCol.classList.toggle('nav-display');
})

const scrollTop = document.querySelector('.scrollTop');
scrollTop.addEventListener('click', () => {
    mainContainer.scrollTo(0, 0);
})

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    if (getCssVariable("--bg") == darkTheme.bg) {
        toggleTheme(lightTheme);
        themeBtn.innerHTML = "&#xF288;";
        localStorage.setItem('theme', 'light');
    } else {
        toggleTheme(darkTheme);
        themeBtn.innerHTML = "&#xF5A1;";
        localStorage.setItem('theme', 'dark');
    }
})
