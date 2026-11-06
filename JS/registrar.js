// Referencias del formulario.
const formulario = document.getElementById("formRegistrar");
const mensajeError = document.getElementById("mensaje-error");
const mensajeExito = document.getElementById("mensaje-exito");

// Evento submit del formulario (dar click en registrar usuario).
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;

    // Validacion: las dos contrasenas deben ser iguales.
    if (contrasena !== confirmar) {
        mensajeExito.hidden = true;
        mensajeError.hidden = false;
        return;
    }

    // mensajes de exito o error.
    mensajeExito.hidden = true;
    mensajeError.hidden = false;

    // Retorna al inicio de sesion.
    (function () {
        window.location.href = "Botoninicio.html";
    })();
});
