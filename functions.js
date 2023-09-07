// FUNZIONI
// una funzione è un blocco di codice RIUTILIZZABILE
// una funzione va PRIMA -dichiarata- e poi -invocata- (eseguita)
// uno dei metodi per DICHIARARE una funzione è utilizzare la keyword "function"

function bark() {
  // questo è il CORPO della funzione, la lista di istruzioni che verrà eseguita ogni volta che invochiamo la funzione bark
  console.log('BAU')
}

// per vedere il nostro console.log è necessario ora ESEGUIRE (invocare) la funzione!
bark()
bark()
bark()
// ora vedo 3 BAU in console perchè sto letteralmente eseguendo il corpo della funzione per 3 volte!

// VALORI DI RITORNO
function sum() {
  let result = 10 + 20
  console.log('result vale', result)
  return result // sto RITORNANDO il valore calcolato, result, alla fine dell'esecuzione della funzione
  console.log('finito!') // questa linea di codice non la vedremo mai, perchè è DOPO il return :(
}

const x = sum() // sum viene lanciata! --> x ottiene il valore di 30
console.log('x', x)
// poichè sum() RITORNA un valore alla fine della sua esecuzione, eseguire sum() significa OTTENERE il suo valore di ritorno!

// l'esecuzione di sum() VALE 30!
// sum() === 30

// il return va SEMPRE INSERITO come ULTIMA RIGA della funzione, perchè una volta raggiunto la funzione ESCE, FINISCE!

function maximumScore() {
  const score = '110'
  return score
}

function createString() {
  const student = {
    firstName: 'Mario',
    lastName: 'Rossi',
    degree: 'Master Degree',
  }

  const degreeCertificate =
    student.firstName +
    ' ' +
    student.lastName +
    ' ' +
    'ha ottenuto un' +
    ' ' +
    student.degree +
    ' con una valutazione di ' +
    maximumScore() +
    ' e lode'

  return degreeCertificate
}

// createString() // ora la lancio

alert(createString()) // ESEGUIRE CREATESTRING() EQUIVALE A OTTENERE IL SUO VALORE DI RITORNO (il certificato)

function tornaCinque() {
  return 5
}

console.log(tornaCinque() + 5) // 10 :)

// PARAMETRI DI UNA FUNZIONE

function addTwoNumbers(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    let result = n1 + n2
    return result
  } else {
    return 'Guarda che non stai passando numeri alla funzione!'
  }
}

console.log('La somma dei due numeri è', addTwoNumbers(7, 8))
console.log('La somma dei due numeri è', addTwoNumbers(6, 13))
console.log('La somma dei due numeri è', addTwoNumbers('9', '12'))

// i nomi che date ai parametri sono di vostra scelta, cercate di darne di sensati
// non c'è limite a quanti parametri una funziona possa accettare, solo il vostro buonsenso
// i parametri possono essere di qualunque tipo, potete invocare una funzione passandoci numeri, stringhe, oggetti

// n3, in caso non venga fornito, non diventa più undefined ma diventa 0
function addThreeNumbers(n1, n2, n3 = 0) {
  // PASSAGGI COMMENTATI PER TRASFORMARE n1, n2, n3 da eventualmente stringhe a numeri,
  // ora superflui perchè convertiamo i prompt direttamente un numeri più in sotto
  //   // parseInt('5') --> 5
  //   // n1, n2, n3 potrebbero essere stringhe! perchè invoco la funzione con i valori dei prompt
  //   let convertedNumber1 = typeof n1 === 'number' ? n1 : parseInt(n1) // parseInt converte una stringa a un numero
  //   // ora sono sicuro al 100% che convertedNumber1 è UN NUMERO!
  //   let convertedNumber2 // stessa cosa ma con if/else
  //   if (typeof n2 === 'number') {
  //     convertedNumber2 = n2
  //   } else {
  //     convertedNumber2 = parseInt(n2) // prendi n2 come stringa e trasformalo nel suo corrispondente valore numerico
  //   }
  //   let convertedNumber3 = typeof n3 === 'number' ? n3 : parseInt(n3) // parseInt converte una stringa a un numero

  //   // a questo punto ho convertedNumber1, 2 e 3 che sono tutti numeri al 100%
  return n1 + n2 + n3
}

console.log(addThreeNumbers(6, 13, 94))
console.log(addThreeNumbers(6, 13)) // PROBLEMA! Senza il valore di default di n3 nella funzione otterremmo Not A Number,
// ma ora che abbiamo un valore di default per n3 = 0 la funzione continua a tornare sempre un numero

// ESEMPIO CON PROMPT

const numero1 = parseInt(prompt('Primo numero?')) // prompt() ritorna una stringa, ma lo facciamo passare per parseInt() così
const numero2 = parseInt(prompt('Secondo numero?')) // da avere un numero in formato numerico,
const numero3 = parseInt(prompt('Terzo numero?')) // in modo da poterlo fornire come argomento a addThreeNumbers()
console.log(numero1, numero2, numero3)

console.log(addThreeNumbers(numero1, numero2, numero3))

let x1 = 10
console.log(x1)

const esempio = function () {
  console.log('BAU')
}

esempio()
