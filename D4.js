/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
    const aRettangolo = l1 * l2
    return aRettangolo
}
console.log("L'area del rettangolo è ", area(7, 8))
console.log("L'area del rettangolo è ", area(9, 20))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
    let sum = n1 + n2
    if (n1 === n2) {
        sum = (n1 + n2) * 3
    } else {
        sum = n1 + n2
    }
    return sum
}
console.log("la loro somma è ", crazySum(8, 8))
console.log("la loro somma è ", crazySum(6, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
    const numDiff = 19
    let diff = n1 - numDiff
    if (n1 > numDiff) {
        diff = (n1 - numDiff) * 3
    } else {
        diff = n1 - numDiff
    }
    return diff
}
console.log("La loro differenza è ", crazyDiff(30))
console.log("La loro differenza è ", crazyDiff(7))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1) {
    if (n1 > 19 && n1 <= 100 || n1 === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(222))
console.log(boundary(40))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (sentence) {
    if (sentence.startsWith("EPICODE")) {
        return sentence;
    } else {
        return "EPICODE " + sentence;
    }
}
console.log(epify("udsvcuvibd8v"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n1) {
    if (n1 % 3 === 0 || n1 % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(40))
console.log(check3and7(21))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string2) {
    return string2.split("").reverse().join("");
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (parole) {
    let newParole = parole.charAt(0).toUpperCase() + parole.slice(1)
    return newParole
}
console.log(upperFirst("fsibks"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (str) {
    return str.slice(1, -1)

}
console.log(cutString("ciao"))
/* SCRIVI QUI LA TUA RISPOSTA */


