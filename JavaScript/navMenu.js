
const logo = document.querySelector('.nav-icon');
const menu = document.querySelector('.navMenu');
const section = document.querySelector('section');
let isOpen = false;

if (logo){
    logo.addEventListener('click', function (){
        menu.classList.toggle('showNavMenu');
        if (isOpen){
            section.classList.remove('blrText');
            isOpen = false;
        } else{
            section.classList.add('blrText');
            isOpen = true;
        }
    });
}
