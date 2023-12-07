/*--------------CAMBIAMOS DE MODO OSCURO A CLARO-----------------*/
//selecciono la imagen de cambio de color
const cambiarColor = document.getElementById('icon-tema')

cambiarColor.addEventListener("click", () => {
    //si no tiene la clase "light" se la añade, si la tiene la elimina
    document.body.classList.toggle('dark')
    //cambio el icono
    if (cambiarColor.src.includes('sol.png')) {
        cambiarColor.src = "img/luna.png"
    } else {
        cambiarColor.src = "img/sol.png"
    }
});

/*--------HACEMOS VISIBLE EL MENU RESPONSIVE-------------*/
const open = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const nav = document.getElementById('nav')

open.addEventListener('click', () => {
    nav.classList.add('show')
})
close.addEventListener('click', () => {
    nav.classList.remove('show')
})

/*---------------------VER CONTRASEÑA-------------------*/
 //COMPROBAMOS QUE EL ELEMENTO ESTÉ EN ESA PÁGINA (si no da error, pues no la encuentra)
if(document.getElementById('pass-checkbox')){
    //si el elemento existe en esa página
    const check = document.getElementById('pass-checkbox')
    const pass = document.getElementById('password')
    check.addEventListener('click', () => {
        if (check.checked) {
            pass.type = 'text'
        } else {
            pass.type = 'password'
        }
    })

    //validamos los campos
    const form = document.getElementById('form')
    const mail = document.getElementById('email')
    const error = document.getElementById('validacion')
    const name = document.getElementById('name')
    const surname = document.getElementById('surname')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        //reinicio valor del error (para que no se repita cada vez)
        error.innerHTML= ""
        //creo una variable para comprobar si todo está correcto
        let esCorrecto = true
        //compruebo si los campos de nombre y apellido estan vacios
        if(name.value.length<=0 || surname.value.length <=0){
            error.innerHTML="Los campos de Nombre y Apellido no pueden estar vacios <br>"
            esCorrecto = false
        }
        //(exprecion regular para validar email)
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        //coMpruebo que el email esta correcto
        if(!regexEmail.test(mail.value)){
            error.innerHTML+= "El correo no es valido <br>"
            esCorrecto = false
        }
        //compruebo que la contraseña tenga mas de 6 caracteres
        if (pass.value.length < 6){
            error.innerHTML+="La contraseña debe contener al menos 6 caracteres <br>"
            esCorrecto = false
        }
       

        //SI TODO ESTÁ CORRECTO:
        if(esCorrecto){
            //Doy la bienvenida al usuario
            alert("Registro realizado correctamente. Bienvenido, "+name.value+" "+surname.value+".")
            //Vacio los campos de texto
            name.value=""
            surname.value=""
            mail.value=""
            pass.value=""
            //Redirigo al usuario a la pagina de INICIO
            location.replace('index.html');
        }

    })
}