// definimos las constantes de la sesion.
const USUARIO = "admin";
const CONTRASENA = "123456";
const MAX_INTENTOS = 3;

// Contador de intentos fallidos.
let intentos = 0;

// Referencias a los elementos de la pagina (los buscamos por su id).
const formulario = document.getElementById("formLogin");
const mensajeError = document.getElementById("mensaje-error");
const mensajeExito = document.getElementById("mensaje-exito");
const botonIngresar = document.getElementById("btnIngresar");

// "submit" (cuando el usuario hace clic en Ingresar).
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Leemos lo que escribio el usuario (el .value saca el texto del input).
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // En JavaScript se compara con === (en Java era con .equals).
    if (usuario === USUARIO && contrasena === CONTRASENA) {
        // ACCESO CORRECTO
        mensajeError.hidden = true;
        mensajeExito.hidden = false;

        (function () {
            window.location.href = "index.html";
        })();
    } else {
        // ACCESO INCORRECTO CONTAMOS INTENTOS FALLIDOS.
        intentos++;
        mensajeExito.hidden = true;

        if (intentos >= MAX_INTENTOS) {
            // BLOQUEO: deshabilitamos el boton y avisamos.
            botonIngresar.disabled = true;
            mensajeError.textContent = "Usuario bloqueado. Supero los " + MAX_INTENTOS + " intentos permitidos.";
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos. Intento " + intentos + " de " + MAX_INTENTOS + ".";
        }

        mensajeError.hidden = false;
    }
});
