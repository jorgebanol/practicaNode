// crear-archivo.js
const fs = require('fs'); // Módulo nativo para el sistema de archivos

const contenido = "Este archivo fue creado automáticamente por JavaScript usando Node.js.\n";

// Creamos (o escribimos) un archivo de texto llamado 'nota.txt'
fs.writeFile('nota.txt', contenido, (err) => {
    if (err) {
        console.log("Hubo un error al crear el archivo:", err);
    } else {
        console.log("¡Éxito! El archivo 'nota.txt' ha sido creado en tu carpeta.");
    }
});
