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

// const prompt = require('prompt-sync')()

// //1. Solicitar al usuario que ingrese un número cualquiera
// let numero = parseFloat(prompt('Ingrese un número:'))

// //2. Calcular el doble del número
// let doble = numero*2

// // 3. Mostrar el resultado por consola:
// console.log('El doble del número ingresado es', doble)

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

// const promptSegundoEjercicio = require('prompt-sync')()

// //1. Solicitar al usuario que ingrese un número
// let numeroSegundoEjercicio = parseFloat(promptSegundoEjercicio('Ingrese un número:'))

// // 2 y 3. Verificar si el número es positivo, negativo o igual a cero y mostrar cuál es el caso.
// if (numeroSegundoEjercicio > 0) {
//     console.log('El número es positivo')
// } else if (numeroSegundoEjercicio < 0) {
//     console.log('El número es negativo')
// } else {
//     'El número es 0'
// }

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

//  const promptTercerEjercicio = require('prompt-sync')()

//  //1. Solicitar al usuario que ingrese dos números
//  let primerNumero = parseFloat(promptTercerEjercicio('Ingrese el primer número:'))
//  let segundoNumero = parseFloat(promptTercerEjercicio('Ingrese el segundo número:'))

//  // 2. Sumar ambos números. 
//  let suma = primerNumero + segundoNumero

//  // 3. Mostrar el resultado de la suma.
//  console.log('El resultado de la suma es:', suma)

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

// // 1. Solicitar al usuario que ingrese un número entero.

// const promptCuartoEjercicio = require('prompt-sync')()

// let numeroEntero = parseInt(promptCuartoEjercicio('Ingrese un número entero:'))

// // 2. Determinar si el número es par o impar y 3. Mostrar un mensaje indicando si el número es par o impar. 
// if (numeroEntero % 2 === 0) {
//     console.log('El número ingresado es par')
// } else {
//     console.log('El número ingresado es impar')
// }

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

// // 1. Solicitar al usuario que ingrese su nombre.
// const promptQuintoEjercicio = require('prompt-sync')()

// let nombre = String(promptQuintoEjercicio('Ingrese su nombre:'))

// // 2. Mostrar un saludo personalizado usando el nombre ingresado.
// console.log(`Hola ${nombre}`)
