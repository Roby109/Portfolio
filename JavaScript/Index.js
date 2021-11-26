const navToggle = document.querySelector('.nav-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}