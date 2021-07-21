var fcontacto = document.getElementById("FormContacto"),

    elemContacto = document.getElementById("Contact"),

    elemCerrar = document.getElementById("CerrarFrm"),

    inputs = document.getElementsByClassName("inputForm"),

    frmContacto = document.getElementById("form-fcontacto"),

    elemNombre = document.getElementById("nombre"),

    elemApellido = document.getElementById("apellido"),

    elemEmail = document.getElementById("email"),

    elemComentario = document.getElementById("comentarios"),

    btnEnviar = document.getElementById("btnEnviar");

elemContacto.onclick = function () {
    LimpiarCampos();
    fcontacto.style.display = "show";
}

elemCerrar.onclick = function () {
    fcontacto.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == fcontacto)
        fcontacto.style.display = "none";
}

frmContacto.addEventListener('submit', EnviarInfo);

async function EnviarInfo(event) {

    event.preventDefault();

    if (elemNombre.value.length <= 0) {
        alert("Debe Escribir un nombre");
        elemNombre.focus();
        return;
    }

    if (elemApellido.value.length <= 0) {
        alert("Debe Escribir un apellido");
        elemApellido.focus();
        return;
    }

    if (email.value.length <= 0) {
        alert("Debe Escribir un email valido");
        elemEmail.focus();
        return;
    }

    if (elemComentario.value.length <= 0) {
        alert("Debe Escribir un comentario");
        elemNombre.focus();
        return;
    }

    let data = {
        name: elemNombre.value,
        lastName: elemApellido.value,
        email: elemEmail.value,
        comentaries: elemComentario.value,
        userId: 1
    }

    let header = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: header
    })
        .then(response => response.json())
        .then(element => {

            let message = `Comentario Enviado, Muchas Gracias\n${element.lastName}, ${element.name}.`
            alert(message);
        });

    this.submit();
}

function LimpiarCampos() {

    Array.prototype.slice.call(inputs).forEach(function (el) {
        el.value = '';
    });

    elemComentario.value = '';
}