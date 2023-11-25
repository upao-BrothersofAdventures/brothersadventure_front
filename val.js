
$(document).ready(function () {
    // Función para manejar el evento de clic en el botón de inicio de sesión
    $(".login-button").on("click", function (e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Aquí puedes agregar la lógica de validación de contraseña
      var inputContraseña = $("#contrasena").val();

      // Verifica si la contraseña es correcta 
      if (inputContraseña === "turistaok") {
        // Si la contraseña es correcta, redirige a la página de perfil
        window.location.href = "crear_publicacion.html";
      } else {
        // Si la contraseña es incorrecta, muestra el modal
        $("#myModal").css("display", "block");
      }
    });

    // Función para cerrar el modal
    $(".close").on("click", function () {
      $("#myModal").css("display", "none");
    });

    // Cierra el modal si se hace clic fuera de él
    $(window).on("click", function (e) {
      if (e.target == $("#myModal")[0]) {
        $("#myModal").css("display", "none");
      }
    });

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
  });





 document.addEventListener("DOMContentLoaded", function() {
  const contrasenaInput = document.getElementById("contrasena");
  const togglePasswordIcon = document.getElementById("togglePasswordIcon");

  togglePasswordIcon.addEventListener("click", function() {
    if (contrasenaInput.type === "password") {
      contrasenaInput.type = "text";
      togglePasswordIcon.classList.remove("fa-eye");
      togglePasswordIcon.classList.add("fa-eye-slash");
    } else {
      contrasenaInput.type = "password";
      togglePasswordIcon.classList.remove("fa-eye-slash");
      togglePasswordIcon.classList.add("fa-eye");
    }
  });
});





