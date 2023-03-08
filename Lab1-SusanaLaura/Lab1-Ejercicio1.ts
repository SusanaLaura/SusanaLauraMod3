//Ejercicio 1 - Código para validar si un texto es palíndromo
//Valida si el texto tiene espacios, simbolos especiales, si es mayuscula o minuscula
export default function esPalindromo(word: string): boolean {
    const formattedWord: string = word.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W]/g, '');
    for (let i = 0; i < formattedWord.length / 2; i++) {
        if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
            return false;
        }
    }
    return true;
  }
    console.log(esPalindromo('ANA LAVA LANA'))