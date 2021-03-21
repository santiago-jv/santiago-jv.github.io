const header = document.querySelector('#inicio')
const menu_desktop = document.querySelector('.menu')
const navbar_mobile = document.querySelector('.nav-mobile')
document.addEventListener('scroll', ()=>{
    console.log(menu )
    if(header.getBoundingClientRect().top !== 0){
        console.log("cambia")
        menu_desktop.style.backgroundColor = '#333333'
        navbar_mobile.style.backgroundColor = '#333333'
    }
    else{
        menu_desktop.style.backgroundColor = 'transparent'
        navbar_mobile.style.backgroundColor = 'transparent'
    }
})