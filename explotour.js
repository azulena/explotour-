// Función para registrar y almacenar el usuario en el localStorage
function guardarUsuario() {
    // Captura los datos del formulario
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("password").value;
    var genero = document.getElementById("genero").value;

    // Crea un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        genero: genero
    };

    // Convierte el objeto en una cadena JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('usuario', usuarioJSON);

    // Guarda el nombre del usuario en localStorage para usarlo en la barra de navegación
    localStorage.setItem('nombreUsuario', nombre);

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'inicioexplo.html';
}

// Función para iniciar sesión
function iniciarSesion() {
    
    var correo = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var usuarioJSON = localStorage.getItem('usuario');

    if (usuarioJSON) {
     
        var usuario = JSON.parse(usuarioJSON);

        
        if (correo === usuario.correo && password === usuario.contraseña) {
            
            window.location.href = 'explotour.html';
        } else {
            
            alert('Cuenta no registrada o datos incorrectos.');
        }
    } else {
        
        alert('Cuenta no registrada o datos incorrectos.');
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        const saludoUsuarioElement = document.getElementById('saludo-usuario');
        if (saludoUsuarioElement) {
            saludoUsuarioElement.textContent = `¡Bienvenido, ${nombreUsuario}!`;
        }
    }
});

//comeentarios
//funcion para que se publiquen los comentarios
function publicarComentario(){
    document.getElementById("commentForm").addEventListener("submit", function(event) {
        event.preventDefault();
  
        var name = document.getElementById("name").value;
        var comment = document.getElementById("comment").value;
  
        var commentElement = document.createElement("div");
        commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;
  
        document.getElementById("comments").appendChild(commentElement);
  
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
      });
}