// saludo.js

// process.argv captura lo que el usuario escribe en la terminal
// El tercer elemento [2] es el primer texto que el usuario inventa
const nombreEstudiante = process.argv[3]; 

if (!nombreEstudiante) {
    console.log("Error: Por favor, escribe tu nombre después del comando.");
    console.log("Ejemplo: node saludo.js Carlos");
} else {
    console.log(`¡Hola, ${nombreEstudiante}! Estás programando en JavaScript Backend.`);
}