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

// Nueva función onchange para profilePicInput
document.getElementById('profilePicInput').onchange = function(event) {
    var file = event.target.files[0];
    if (file) {
        var fileExtension = file.name.split('.').pop().toLowerCase();
        if(fileExtension === "jpg" || fileExtension === "png") {
            var src = URL.createObjectURL(file);
            var preview = document.getElementById('profilePic');
            preview.src = src;
            preview.style.display = "block";
        } else {
            alert('Ingrese una foto en formato jpg o png');
            event.target.value = "";
        }
    }
};

document.getElementById('guardarCambios').addEventListener('click', function() {
    alert('Cambios guardados correctamente!');
});

document.addEventListener('DOMContentLoaded', function() {
    
});

const navItems = document.querySelectorAll('.nav-item')

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

// Función para mostrar la vista previa de la imagen seleccionada
function previewImage(event, previewId) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById(previewId);
      output.src = reader.result;
      output.style.display = "block"; 
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('mainImageInput').addEventListener('change', function(event) {
      previewImage(event, 'mainImagePreview');
    });
    document.getElementById('secondaryImageInput1').addEventListener('change', function(event) {
      previewImage(event, 'secondaryImagePreview1');
    });
    
});
