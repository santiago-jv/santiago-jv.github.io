const header = document.querySelector('#inicio')

const navbar_mobile = document.querySelector('.nav-mobile')
const btn_top = document.querySelector('.btn')
document.addEventListener('scroll', ()=>{

    if(header.getBoundingClientRect().top !== 0){
   
        menu_desktop.style.backgroundColor = '#333333'
        navbar_mobile.style.backgroundColor = '#333333'

    }
    else{
        menu_desktop.style.backgroundColor = 'transparent'
        navbar_mobile.style.backgroundColor = 'transparent'
    }
    if(header.getBoundingClientRect().bottom <= 0){
      btn_top.style.bottom = '1vw';
        
    }
    else{
        btn_top.style.bottom = '-100%';
    }
})