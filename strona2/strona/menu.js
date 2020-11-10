// const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector('.menu-btn__burger');
// const nav = document.querySelector('.nav');
// const menuNav = document.querySelector('.menu-nav');

// let showMenu = false;


// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(!showMenu){
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         menuNav.classList.add('open')
//         showMenu = true;
//     }else{
//         hamburger.classList.remove('open');
//         nav.classList.remove('open');
//         menuNav.classList.remove('open')
//         showMenu = false;
//     }
// }


const burger = document.querySelector('.burger');
const bars =document.querySelector('.burger__bars');
const menu =document.querySelector('.menu-drop');


let showMenu =false;

 burger.addEventListener('click', toggleMenu);

 function toggleMenu(){
     if(!showMenu){
         menu.classList.add('open');
         bars.classList.add('open');
         showMenu = true;
     }else{
        menu.classList.remove('open');
        bars.classList.remove('open');
        showMenu = false;
     }
 }