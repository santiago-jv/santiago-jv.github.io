let menu_open = false;
const menu = document.querySelector('#menu-mobile');

const abrirMenu = ()=>{
    menu_open = true;
    menu.style.right= '0%';

}
const cerrarMenu = ()=>{
    menu_open = false;
    menu.style.right= '-100%';

}

