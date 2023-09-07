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
