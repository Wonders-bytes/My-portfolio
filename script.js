/*HAMBURGER MENU*/
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/*Toggle menu when hamburger is clicked*/
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/*Close menu when a link is clicked*/
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/*SCROLL ANIMATION*/

const sections = document.querySelectorAll(
'.about, .skills, .projects, .contact'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.classList.add('show');

    }

});


},{
threshold:0.2
});

sections.forEach(section => {

observer.observe(section);


});

/*ACTIVE NAVIGATION*/
const navItems =
document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', ()=>{

let current = '';

document.querySelectorAll('section')
.forEach(section => {

    const sectionTop =
    section.offsetTop - 150;

    if(window.scrollY >= sectionTop){

        current = section.getAttribute('id');

    }

});

navItems.forEach(link => {

    link.classList.remove('active-link');

    if(
    link.getAttribute('href')
    === '#' + current
    ){

        link.classList.add('active-link');

    }

});

});

/*SCROLL TO TOP BUTTON*/
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});