// Correos almacenados
var correosRegistrados = ["fer12@gmail.com", "fer123@upao.com", "fer1234@hotmail.com"];
var contraseñaValida = "turistaok"; // Contraseña

function validarRegistro() {
    var nuevoCorreo = document.getElementById("correo").value;
    var errorCorreo = document.getElementById("errorCorreo");

    // Verifica si el nuevo correo ya está registrado
    if (correosRegistrados.includes(nuevoCorreo)) {
        errorCorreo.textContent = "Este correo ya está en uso.";
        return false; // Evita que se envíe el formulario
    } else {
        errorCorreo.textContent = ""; // Limpia el mensaje de error

        // Supongamos que ya tienes un arreglo de contraseñas registradas
        var contraseñaIngresada = prompt("turistaok"); // 

        // Verifica si la contraseña ingresada es válida
        if (contraseñaIngresada === contraseñaValida) {
            // Si la contraseña es válida, redirige a la página del perfil
            window.location.href = "perfil.html";
        } else {
            // Si la contraseña es incorrecta, muestra el modal de error
            mostrarModalError();
        }

        return false; // Evita que se envíe el formulario automáticamente
    }
}

function mostrarModalError() {
    alert("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
}



  // Muestra u oculta la contraseña cuando se hace clic en el ícono del ojo
  $("#togglePasswordIcon").on("click", function () {
    var passwordInput = $("#contrasena");
    var icon = $("#togglePasswordIcon");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      icon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      passwordInput.attr("type", "password");
      icon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });

