
window.sr =ScrollReveal();

//      I N D E X 
sr.reveal('.BarraNav',{
    duration: 1200,
    distance: '-100px',
    //origin: "left",
});

sr.reveal('.Contenedor-Principal',{duration: 1200,});
sr.reveal('.ContenedorCartas',{duration: 1200,});
sr.reveal('.ContenedorCartas2',{duration: 1200,}); //    I N D E X
sr.reveal('.BackImage3',{duration: 1200,});
sr.reveal('.social',{duration: 1200,});

sr.reveal('.bodyFomularios',{duration: 1200,}); //    L O G I N   A N D   R E G I S T E R



//       M E N U   H A M B U R G U E S A 

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


