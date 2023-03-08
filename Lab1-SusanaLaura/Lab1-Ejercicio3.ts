//Ejercicio 3 - Código que devuelva una matriz de cadenas con una cadena de entrada
var text='Hello';
var arr = text.split('');
console.log(arr);



//Ejercicio 3 - Código que devuelva una matriz de cadenas con una cadena de entrada 
//(Segunda respuesta) 
var text='Hello';
console.log('[');
//vector: string[];
for (let i=0; i<text.length; i++)
{console.log(text[i])}
console.log(']');
