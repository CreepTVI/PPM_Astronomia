
const logo = document.querySelector('.nav-icon');
const menu = document.querySelector('.navMenu');
const section = document.querySelector('section');
const subMenu = document.querySelector('.subMenu');
const itemsMenu = document.querySelector('.item_menu');

let isOpen = false;

if (logo){
    logo.addEventListener('click', function (){
        menu.classList.toggle('showNavMenu');
        logo.classList.toggle('x');
        if (isOpen){
            section.classList.remove('blrText');
            isOpen = false;
        } else{
            section.classList.add('blrText');
            isOpen = true;
        }
        itemsMenu.addEventListener('click', function (){
            subMenu.classList.toggle('showSubMenu');
        })
    });
}
