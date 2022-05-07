
// MENU HAMBURGUESA 

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);



function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}




window.sr =ScrollReveal();

//      I N D E X 
sr.reveal('.BarraNav',{
    duration: 1200,
    distance: '-100px',
    //origin: "left",
});

sr.reveal('.Contenedor-Principal',{duration: 1200,});
sr.reveal('.ContenedorCartas',{duration: 1200,});
sr.reveal('.ContenedorCartas2',{duration: 1200,});
sr.reveal('.BackImage3',{duration: 1200,});
sr.reveal('.social',{duration: 1200,});

//    L O G I N   A N D   R E G I S T E R
sr.reveal('.bodyFomularios',{duration: 1200,});
