const logo = document.querySelector('.nav-icon');
const menu = document.querySelector('.navMenu');
const section = document.querySelector('section');
const subMenus = [document.querySelector('#sub1'), document.querySelector('#sub2'),
    document.querySelector('#sub3'), document.querySelector('#sub4'),
    document.querySelector('#sub5'), document.querySelector('#sub6')];

const itemsMenu = [document.querySelector('.item_menu1'), document.querySelector('.item_menu2'),
    document.querySelector('.item_menu3'), document.querySelector('.item_menu4'),
    document.querySelector('.item_menu5'), document.querySelector('.item_menu6')];

const submitButt = document.querySelector('#submit');


let isOpen = false;
let i = 0;

if (logo) {
    logo.addEventListener('click', function () {

        menu.classList.toggle('showNavMenu');
        logo.classList.toggle('x');
        if (isOpen) {
            //disabilita il bottone del submit nelle pagine dei test
            if(submitButt){
                submitButt.removeAttribute('disabled');
                submitButt.classList.remove('noHover');
            }


            //togli l'effetto blur alla section
            section.classList.remove('blrText');
            subMenus[i].classList.remove('showSubMenu');
            isOpen = false;
        } else {
            if(submitButt){
                submitButt.classList.add('noHover');
                submitButt.setAttribute('disabled', '');
            }

            section.classList.add('blrText');
            isOpen = true;
        }
        itemsMenu[0].addEventListener('click', function () {
            if (i !== 0) {
                subMenus[i].classList.remove('showSubMenu');
                i = 0;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })
        itemsMenu[1].addEventListener('click', function () {
            if (i !== 1) {
                subMenus[i].classList.remove('showSubMenu');
                i = 1;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })
        itemsMenu[2].addEventListener('click', function () {
            if (i !== 2) {
                subMenus[i].classList.remove('showSubMenu');
                i = 2;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })
        itemsMenu[3].addEventListener('click', function () {
            if (i !== 3) {
                subMenus[i].classList.remove('showSubMenu');
                i = 3;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })
        itemsMenu[4].addEventListener('click', function () {
            if (i !== 4) {
                subMenus[i].classList.remove('showSubMenu');
                i = 4;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })
        itemsMenu[5].addEventListener('click', function () {
            if (i !== 5) {
                subMenus[i].classList.remove('showSubMenu');
                i = 5;
            }
            subMenus[i].classList.toggle('showSubMenu');
        })

    });
}
