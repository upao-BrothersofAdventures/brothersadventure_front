const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark"));

    if(body.classList.contains("dark")){
        modeText.innerText = "Modo Claro"
    }
    else{
        modeText.innerText = "Modo Oscuro"
    }
});

if(localStorage.getItem("darkMode") === "true"){
    body.classList.add("dark");
    modeText.innerText = "Modo Claro";
}

document.getElementById('profilePicInput').onchange = function(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById('profilePic');
        preview.src = src;
        preview.style.display = "block";
    }
};

document.getElementById('guardarCambios').addEventListener('click', function() {
    alert('Cambios guardados correctamente!');
});

document.addEventListener('DOMContentLoaded', function() {
    // Código para inicialización de componentes o funcionalidades adicionales
});

const navItems = document.querySelectorAll('.nav-item');

function removeActiveClasses() {
    navItems.forEach(item => {
        item.classList.remove('active');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        removeActiveClasses();
        item.classList.add('active');
    });
});


function selectOption(element) {
    

    element.classList.toggle('selected');
}


const optionButtons = document.querySelectorAll('.option-button');
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectOption(this);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Obtener el modal
    var modal = document.getElementById("commentModal");

    // Obtener todos los botones que abren el modal
    var btns = document.querySelectorAll(".comment-button");

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Función para abrir el modal
    btns.forEach(function(btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    // Cuando el usuario hace clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
