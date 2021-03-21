let menu_open = false;
const menu_mobile = document.querySelector('#menu-mobile');
const menu_desktop = document.querySelector('.menu')
const abrirMenu = ()=>{
    menu_open = true;
    menu_mobile.style.right= '0%';

}
const cerrarMenu = ()=>{
    menu_open = false;
    menu_mobile.style.right= '-100%';

}

const main_title_container = document.querySelector('.main-title-container')
window.addEventListener('load',()=>{
    main_title_container.style.opacity = '1'
    menu_desktop.style.top='0'
    menu_mobile.style.top = '0'
})
