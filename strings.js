const myString = 'Mario ha vinto alla lotteria!'

const vintoPosition = myString.indexOf('vinto') // --> ci torna la posizione della parola "vinto", 9
console.log(vintoPosition)

const vinto = myString.slice(9, 14) // la 9 è inclusa, è la lettera "v", mentre la 14 non è inclusa, sarebbe lo " "
console.log(vinto)

const stringa = 'buongiorno EPICODE!'
// come trasformo questa stringa mettendo in maiuscolo SOLAMENTE la b di buongiorno? "Buongiorno EPICODE!"

stringa.toUpperCase() // "BUONGIORNO EPICODE!"

// metodo "cheat" :) funziona in questo caso, ma se avessimo altre "b" prima non avrebbe funzionato
console.log(stringa.replace('b', 'B'))

stringa.slice(0, 1) // 'b'

// metodo più "robusto"
console.log(stringa.slice(0, 1).toUpperCase() + stringa.slice(1))
// "B" + "uongiorno EPICODE!"
