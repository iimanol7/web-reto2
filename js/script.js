/*--------------CAMBIAMOS DE MODO OSCURO A CLARO-----------------*/
//selecciono la imagen de cambio de color
const cambiarColor = document.getElementById('icon-tema')

cambiarColor.addEventListener("click", () => {
    //si no tiene la clase "light" se la añade, si la tiene la elimina
    document.body.classList.toggle('dark')
    //cambio el icono
    if(cambiarColor.src.includes('sol.png')){
        cambiarColor.src= "/img/luna.png"
    }else{
        cambiarColor.src= "/img/sol.png"
    }
});

/*--------HACEMOS VISIBLE EL MENU RESPONSIVE-------------*/
const open = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const nav = document.getElementById('nav')

open.addEventListener('click', ()=>{
    nav.classList.add('show')
})
close.addEventListener('click', ()=>{
    nav.classList.remove('show')
})

