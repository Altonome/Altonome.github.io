const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navlogo = document.querySelector('#navbar__logo')

//Display Mobile Menu
const mobileMenu =() =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const hightMenu = ()=> {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const productMenu = document.querySelector('#product-page')
    let scrollPos = window.scrollY
    

    //adds 'highlight' class to my menu items 
    if(window.innerWidth >960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('higlight')
        return
        } else if (window.innerWidth >960 &&scrollPos <1400) {
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            productMenu.classList.remove('highlight')
            return
        } else if (window.innerWidth >960 &&scrollPos <2345) {
            productMenu.classList.add('highlight')
            aboutMenu.classList.remove('highligt')
            return
        }

        if((elem && window.innerWidth < 906 && scrollPos <600)|| elem) {
            elem.classList.remove('highlight')
        }
}

window. addEventListener ('scroll',highlightMenu);
window. addEventListener ('click',higlightMenu);

//Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

menuLinks.addEventListener('click',hideMobileMenu);
navlogo.menuLinks.addEventListener('click',hideMobileMenu);






