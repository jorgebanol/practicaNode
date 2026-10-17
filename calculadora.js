// calculadora.js

// 1. Capturamos los argumentos de la terminal
// process.argv[2] será la operación (sumar, restar, multiplicar, dividir)
// process.argv[3] será el primer número
// process.argv[4] será el segundo número
const operacion = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

// 2. Validación de datos de entrada
if (!operacion || isNaN(num1) || isNaN(num2)) {
    console.log("Error: Faltan datos o los números no son válidos.");
    console.log("Uso correcto: node calculadora.js [operacion] [numero1] [numero2]");
    console.log("Ejemplo:      node calculadora.js sumar 15 5");
    process.exit(1); // Detiene la ejecución del script
}

// 3. Función para realizar los cálculos
function calcular(op, n1, n2) {
    let resultado = 0;

    switch (op.toLowerCase()) {
        case '+':
            resultado = n1 + n2;
            break;
        case 'restar':
            resultado = n1 - n2;
            break;
        case 'multiplicar':
            resultado = n1 * n2;
            break;
        case 'dividir':
            // Validación matemática: evitar división por cero
            if (n2 === 0) {
                return "Error: No se puede dividir entre cero.";
            }
            resultado = n1 / n2;
            break;
        default:
            return `Error: La operación '${op}' no es válida. Usa: sumar, restar, multiplicar o dividir.`;
    }

    return `El resultado de ${op} ${n1} y ${n2} es: ${resultado}`;
}

// 4. Ejecutar la función e imprimir el resultado en la consola
const mensajeResultado = calcular(operacion, num1, num2);
console.log("========================================");
console.log(mensajeResultado);
console.log("========================================");
