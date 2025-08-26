//CLASE 8:
// Ejercicio 1: Calcula el doble de un número
// Enunciado:
// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
// escribir un programa en JavaScript que:
// 1. Solicite al usuario que ingrese un número cualquiera.
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola.
// Requisitos:
//  Utiliza la función prompt() para solicitar el dato al usuario.
//  Almacena el número ingresado en una variable.
//  Utiliza un operador aritmético para calcular el doble del número.
//Solución:

const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Ingrese un número:"));

let doble = numero * 2;

console.log("El doble del número ingresado es", doble);

//____________________________________________________

// Ejercicio 2: Verificar si un número es positivo, negativo o cero
// Enunciado:
// En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
// programa en JavaScript que:
// 1. Pida al usuario que ingrese un número.
// 2. Verifique si el número es positivo, negativo o igual a cero.
// 3. Muestre un mensaje indicando cuál es el caso.
// Requisitos:
//  Utiliza una estructura de control de flujo (if, else if, else) para hacer las
// verificaciones.
//  Usa parseFloat() para convertir la entrada del usuario a un número.
//Solución:

const prompt1 = require("prompt-sync")();

let numero1 = parseFloat(prompt1("Ingrese un número:"));

if (numero1 > 0) {
  console.log("El número es positivo");
} else if (numero1 < 0) {
  console.log("El número es negativo");
} else {
  ("El número es 0");
}

// _____________________________________________________

// Ejercicio 3: Suma de dos números ingresados por el usuario
// Enunciado:
// Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
// aritméticos. Escribe un programa que:
// 1. Pida al usuario que ingrese dos números.
// 2. Sume ambos números.
// 3. Muestre el resultado de la suma.
// Requisitos:
//  Utiliza prompt() para recibir los números.
//  Utiliza parseFloat() para convertir las entradas a números.
//  Almacena los resultados en variables adecuadas y muestra el resultado.
//Solución:

const prompt2 = require("prompt-sync")();

let primerNumero = parseFloat(prompt2("Ingrese el primer número:"));
let segundoNumero = parseFloat(prompt2("Ingrese el segundo número:"));

let suma = primerNumero + segundoNumero;

console.log("El resultado de la suma es:", suma);

//____________________________________________________

// Ejercicio 4: Determinar si un número es par o impar
// Enunciado:
// En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
// Debes escribir un programa que:
// 1. Solicite al usuario que ingrese un número entero.
// 2. Determine si el número es par o impar.
// 3. Muestre un mensaje indicando si el número es par o impar.
// Requisitos:
//  Utiliza el operador módulo (%) para comprobar si el número es divisible
// por 2.
//  Usa una estructura if-else para mostrar el mensaje adecuado.
//Solución:

const prompt3 = require("prompt-sync")();

let numeroEntero = parseInt(prompt3("Ingrese un número entero:"));

if (numeroEntero % 2 === 0) {
  console.log("El número ingresado es par");
} else {
  console.log("El número ingresado es impar");
}

//________________________________________________
// Ejercicio 5: Saludo personalizado
// Enunciado:
// Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
// texto y la función prompt(). Escribe un programa que:
// 1. Solicite al usuario que ingrese su nombre.
// 2. Muestre un saludo personalizado usando el nombre ingresado.
// Requisitos:
//  Utiliza prompt() para recibir el nombre del usuario.
//  Muestra un mensaje utilizando concatenación de cadenas.
//Solución:

const prompt4 = require("prompt-sync")();

let nombre = String(prompt4("Ingrese su nombre:"));

console.log(`Hola ${nombre}`);

//__________________________________________________________________________________
//CLASE 9:
//  Ejercicio 1:
// Declara dos variables numéricas numero1 y numero2. Pide al usuario
// que ingrese dos números y muestra cuál es mayor o si son iguales.
//Solución:
const prompt1Clase9 = require("prompt-sync")();

let numeroUno = parseInt(prompt1Clase9("Ingresa el primer numero:"));
let numeroDos = parseInt(prompt1Clase9("Ingresa el segundo numero:"));

if (numeroUno > numeroDos) {
  console.log(`${numeroUno} es mayor que ${numeroDos}`);
} else if (numeroUno < numeroDos) {
  console.log(`${numeroUno} es menor que ${numeroDos}`);
} else {
  console.log(`${numeroUno} y ${numeroDos} son iguales`);
}
//___________________________________________________
// Ejercicio 2:
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
// valores numéricos de tu elección. Pide al usuario que ingrese un
// número y verifica si está dentro del rango definido por las constantes.
//Solución:

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 20;

const prompt2Clase9 = require("prompt-sync")();
let numero3 = parseInt(prompt2Clase9("Ingresa un numero:"));

if (numero3 >= RANGO_MINIMO && numero3 <= RANGO_MAXIMO) {
  console.log(`${numero3} está dentro del rango definido`);
} else {
  console.log(`${numero3} no está dentro del rango definido`);
}

//______________________________________________________
// Ejercicio 3:
// Declara dos variables booleanas condicion1 y condicion2. Pide al
// usuario que ingrese dos valores booleanos (true o false) y muestra el
// resultado de diversas combinaciones lógicas.
//Solución:

const prompt3Clase9 = require("prompt-sync")();

let condicion1 =
  prompt3Clase9("Ingrese el primer valor booleano (true/false):") === "true";
let condicion2 =
  prompt3Clase9("Ingrese el segundo valor booleano (true/false):") === "true";

console.log(`Condición 1: ${condicion1}`);
console.log(`Condición 2: ${condicion2}`);
console.log(`AND: (${condicion1} && ${condicion2})`);
console.log(`OR: (${condicion1} || ${condicion2})`);
console.log(`NOT Condición 1: !${condicion1}`);
console.log(`NOT Condición 2: !${condicion2}`);
//_____________________________________________________
// Ejercicio 4:
// Declara una variable nombre y pide al usuario que ingrese su nombre.
// Verifica si el nombre ingresado es igual a tu nombre.
//Solución:

let nombreDos = "Sofia";

const promptNombre = require("prompt-sync")();

let nombreIngresado = promptNombre("Ingrese su nombre: ");

if (nombreDos === nombreIngresado) {
  console.log(`${nombreDos} es igual a ${nombreIngresado}`);
} else {
  console.log(`${nombreDos} es distinto a ${nombreIngresado}`);
}

//____________________________________________________
// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y
// determine cuál es el mayor de los tres.
//Solución:

const promptPrimerNumero = require("prompt-sync")();
const promptSegundoNumero = require("prompt-sync")();
const promptTercerNumero = require("prompt-sync")();

const primerNumeroIngresado = parseInt(
  promptPrimerNumero("Ingrese el primer número:")
);
const segundoNumeroIngresado = parseInt(
  promptSegundoNumero("Ingrese el segundo número:")
);
const tercerNumeroIngresado = parseInt(
  promptTercerNumero("Ingrese el tercer número:")
);

let numeroMayor;

if (
  primerNumeroIngresado > segundoNumeroIngresado &&
  primerNumeroIngresado > tercerNumeroIngresado
) {
  numeroMayor = primerNumeroIngresado;
} else if (
  segundoNumeroIngresado > primerNumeroIngresado &&
  segundoNumeroIngresado > tercerNumeroIngresado
) {
  numeroMayor = segundoNumeroIngresado;
} else {
  numeroMayor = tercerNumeroIngresado;
}
console.log(`El número mayor es ${numeroMayor}`);

//____________________________________________________________
// Ejercicio 6:
// Pide al usuario que ingrese su edad y verifica si es mayor o menor de
// edad. Muestra un mensaje personalizado según el caso.
//Solución:

const promptEdad = require("prompt-sync")();
let edad = parseInt(promptEdad("Ingrese su edad:"));

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
//___________________________________________________________
// Ejercicio 7:
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de
// kg a libras, Pista: 2.20462)
//Solución:

const promptPeso = require("prompt-sync")();

let peso = parseInt(promptPeso("Ingrese su peso en kilogramos: "));

let pesoALibras = peso * 2.20462;

console.log(`Tu peso de ${peso} kg es igual a ${pesoALibras} libras`);
//______________________________________________________________
// Ejercicio 8:
// Pide al usuario que ingrese las longitudes de los tres lados de un
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
// escaleno. (Investiga sobre los triángulos para determinar la formula)
//Solucion:

const promptTriangulo = require("prompt-sync")();

let longitud1 = parseInt(
  promptTriangulo("Ingrese longitud del primer lado del triangulo: ")
);
let longitud2 = parseInt(
  promptTriangulo("Ingrese longitud del segundo lado del triangulo: ")
);
let longitud3 = parseInt(
  promptTriangulo("Ingrese longitud del tercer lado del triangulo: ")
);

if (longitud1 === longitud2 && longitud1 === longitud3) {
  console.log("El triángulo es equilátero");
} else if (longitud1 === longitud2 || longitud1 === longitud3) {
  console.log("El triángulo es isóceles");
} else {
  console.log("El triángulo es escaleno");
}

//_______________________________________________________
// Ejercicio 9:
// Define una constante PI con el valor de pi (3.14159). Pide al usuario
// que ingrese el radio de un círculo y calcula su área y perímetro
// utilizando la constante PI.
//Solución:

const PI = 3.14159;
const promptRadio = require("prompt-sync")();

let radio = parseFloat(promptRadio("Ingrese el radio de un círculo: "));
let area = PI * radio ** 2;
let perimetro = 2 * PI * radio;

console.log(`El área del círculo es ${area} y el perímetro es ${perimetro}`);
//___________________________________________________________
//  Ejercicio 10:
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
// semana correspondiente. Si el número no está dentro de ese rango,
// muestra un mensaje de error.

const promptDia = require("prompt-sync")();

let dia = parseInt(promptDia("Ingrese un número del 1 al 7: "));

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sábado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("El número no corresponde a un día de semana");
}
