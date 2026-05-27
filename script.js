// Capturamos el formulario
const formulario = document.getElementById("contactForm");

// Evento submit
formulario.addEventListener("submit", function(event){

    // Evita que la página se recargue
    event.preventDefault();

    // Capturamos valores
    const nombre = document.getElementById("nombre").value;

    // Mensaje simple
    alert(`Gracias por contactarte ${nombre}`);

    // Reiniciar formulario
    formulario.reset();

});