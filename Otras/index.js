// Ejercicio 1
/*
    Descripcion:
    * We want to check if a string is empty.
    * If a string is not empty, we want to print
    * out the first character of that string.
    * If a string is empty, print out a text saying
    * "This string is empty" 
*/

// Funcion
function checkEmptyString( str ) {
    let res = "";
    if (str.length == 0) {
        res = "This string is empty";
    } else {
        res = str[0];
    }
    return res;
}

const str = "";
console.log("************ Ejercicio Uno *********** ");
console.log(`La cadena de interes es: ${str}`);
console.log(checkEmptyString(str));


/**
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not 
*/

// Funcion
function checkTwoStringsSame(s1,s2) {

    let res = "";
    if (s1.toLowerCase() == s2.toLowerCase()){
        res = "True";
    } else {
        res = "False";
    }
    return res;
}

let s1 = "String1";
let s2 = "string1";
console.log("\n************ Ejercicio Dos ************");
console.log(`Cadena Uno: ${s1}`);
console.log(`Cadena Dos: ${s2}`);
console.log(`¿Las cadenas son iguales? -> ${checkTwoStringsSame(s1,s2)}`);

// Ejercicio Tres: Factura
const hours = 48;
const costPerHour = 100.0;
const iva = 5;
const discount = 5;

const total = (hours * costPerHour)*(1 - discount/100)*(1 + iva/100);
console.log("\n************ Ejercicio Tres ***********");
console.log(`Super Desarrolladores genero una factura por ${total}`);
console.log("Detalles de la Factura");
console.log(`Costo Bruto: ${hours*costPerHour}`);
console.log(`IVA (${iva}%): ${hours*costPerHour*iva/100}`);
console.log(`Descuento (${discount}%): ${hours*costPerHour*discount/100}`);
