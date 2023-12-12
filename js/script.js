/*--------------CAMBIAMOS DE MODO OSCURO A CLARO-----------------*/
if (document.getElementById('icon-tema')) {
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

}

/*--------HACEMOS VISIBLE EL MENU RESPONSIVE-------------*/
if (document.getElementById('open-menu')) {

    const open = document.getElementById('open-menu')
    const close = document.getElementById('close-menu')
    const nav = document.getElementById('nav')

    open.addEventListener('click', () => {
        nav.classList.add('show')
    })
    close.addEventListener('click', () => {
        nav.classList.remove('show')
    })

}
/*---------------------VER CONTRASEÑA-------------------*/
//COMPROBAMOS QUE EL ELEMENTO ESTÉ EN ESA PÁGINA (si no da error, pues no la encuentra)
if (document.getElementById('pass-checkbox')) {
    //si el elemento existe en esa página
    const check = document.getElementById('pass-checkbox')
    const pass = document.getElementById('password')
    const repeatPass = document.getElementById('repeat-password')
    check.addEventListener('click', () => {
        if (check.checked) {
            pass.type = 'text'
            repeatPass.type = 'text'
        } else {
            pass.type = 'password'
            repeatPass.type = 'password'
        }
    })

    //validamos los campos
    const form = document.getElementById('form')
    const mail = document.getElementById('email')
    const error = document.getElementById('validacion')
    const name = document.getElementById('name')
    const surname = document.getElementById('surname')
 
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //reinicio valor del error (para que no se repita cada vez)
        error.innerHTML = ""
        //creo una variable para comprobar si todo está correcto
        let esCorrecto = true
        //compruebo si los campos de nombre y apellido estan vacios
        if (name.value.length <= 0 || surname.value.length <= 0) {
            error.innerHTML = "Los campos de Nombre y Apellido no pueden estar vacios <br>"
            esCorrecto = false
        }
        //(expresión regular para validar el formato del email)
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        //coMpruebo que el email esta correcto
        if (!regexEmail.test(mail.value)) {
            error.innerHTML += "El correo no es valido <br>"
            esCorrecto = false
        }
        //(Expresión regular para comprobar el formato de la contraseña)
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
        //compruebo que la contraseña tenga mas de 6 caracteres
        if (pass.value.length < 6) {
            error.innerHTML += "La contraseña debe contener al menos 6 caracteres <br>"
            esCorrecto = false
        } else if (!regexPass.test(pass.value)) {
            error.innerHTML += "la contraseña debe contener al menos una letra minúscula, una mayúscula y un número <br>"
            esCorrecto = false
        } else if (pass.value !== repeatPass.value) {
            error.innerHTML += "Las contraseñas no coinciden"
            esCorrecto = false
        }


        //SI TODO ESTÁ CORRECTO:
        if (esCorrecto) {
            //Doy la bienvenida al usuario
            alert("Registro realizado correctamente. Bienvenido, " + name.value + " " + surname.value + ".")
            //Vacio los campos de texto
            name.value = ""
            surname.value = ""
            mail.value = ""
            pass.value = ""
            //Redirigo al usuario a la pagina de INICIO
            window.close()
        }

    })
}

/*-------------------------ABRIR FORMULARIO DE REGISRTO----------------------*/
if (document.querySelector('.noticias-main')) {

    const linkForm = document.getElementById('link-form')
    console.log(linkForm)
    linkForm.addEventListener('click', (e) => {
        e.preventDefault()
        const opcionesVentana = "width=400, height=500, top=100, left=100, fullscreen=no"

        window.open("register.html", "_blank", opcionesVentana);
    })

}