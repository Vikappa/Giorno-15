/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
// const sum = 20 + 10
// console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
// let random = function () {
//   let ritorno = Math.floor(Math.random() * 21)
//   return ritorno
// }
// console.log(random())
// console.log(random())
// console.log(random())

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// const me = {
//   name: "Vincenzo",
//   surname: "Costantini",
//   age: "29"
// }
// /* ESERCIZIO D
//   Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
// */
// const removeAge = function (obg) {
//   delete obg.age
// }
// console.log(me)
// removeAge(me)
// console.log(me)

// /* ESERCIZIO E
//   Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
// */
// const linguaggiCheConosco = ['html', 'css', 'javascript', 'java']

// const aggiungiskill = function (target, array) {
//   target.skill = array
// }
// aggiungiskill(me, linguaggiCheConosco)
// console.log(me)

// /* ESERCIZIO F
//   Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
// */
// const aggiungiAllaListaSkills = function (target, newSkill) {
//   target.skill.push(newSkill)
// }
// aggiungiAllaListaSkills(me, "angular")
// console.log(me)

// /* ESERCIZIO G
//   Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
// */
// const togliUltimaSkill = function (target) {
//   me.skill.splice(me.skill.length - 1, 1)
// }

// togliUltimaSkill(me)
// console.log(me)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
// const dice = function () {
//   let ritorno = Math.floor(Math.random() * 6) + 1
//   return ritorno
// }

// console.log(dice())
// console.log(dice())
// console.log(dice())
// console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// const whoIsBigger = function (parm1, parm2) {
//   if (parm1 >= parm2) {
//     return parm1
//   } else {
//     return parm2
//   }
// }

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// const splitMe = function (frase) {
//   let ritorno = []
//   ritorno = frase.split(" ")
//   return ritorno
// }

// console.log(splitMe("I love coding"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
// let testString = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
// const deleteOne = function (string, param) {
//   let temp
//   if (param) {
//     temp = string.substring(1, string.length)
//     return temp
//   } else {
//     temp = string.substring(0, string.length - 1)
//     return temp
//   }
// }

// console.log(deleteOne(testString, true))
// console.log(deleteOne(testString, false))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// const onlyLetters = function (stringtoparse) {
//   let temp = stringtoparse.replace(/[0-9]?/g, "");


//   return temp
// }

// console.log(onlyLetters("I have 5 dogs, 3 green and 2 yellow. And one space cat!")
// )

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// const isThisAnEmail = function (email) {
//   let emailStringata = [...email]
//   let parolaDotDominio

//   for (let x = 0; x < emailStringata.length; x++) {
//     if (emailStringata[x] === "@") {
//       parolaDotDominio = emailStringata.slice(x + 1, emailStringata.length)
//       let parolaDotDominioStringata = [...parolaDotDominio]
//       for (let y = 0; y < parolaDotDominioStringata.length; y++) {
//         if (parolaDotDominioStringata[y] === ".") {
//           if (emailStringata.length > parolaDotDominioStringata.length + 1) {
//             return true
//           }
//         }
//       }
//     }
//   }
//   return false
// }

// console.log(isThisAnEmail("vincenzo.e.costantini@gmail.com"))
// console.log(isThisAnEmail("vincenzoChiocciolaVattelappescamail.com"))
// console.log(isThisAnEmail("vincenzo@Costantini"))
// console.log(isThisAnEmail("@Costantini"))
// console.log(isThisAnEmail("@vincenzo.com"))
// console.log(isThisAnEmail("Costantini@Vincenzo"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// const whatDayIsIt = function () {

//   const dayoftheweek = [
//     "lunedì",
//     "martedì",
//     "mercoledì",
//     "giovedì",
//     "venerdì",
//     "sabato",
//     "domenica"
//   ]

//   const now = new Date()
//   const day = now.getDay()
//   dayoftheweek[day]
//   return dayoftheweek[day]
// }

// console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// const rollTheDices = function (param) {
//   const ritorno = {}
//   ritorno.values = []
//   ritorno.sum = 0
//   for (let i = 0; i < param; i++) {
//     ritorno.values.push(dice())
//   }
//   for (let x = 0; x < ritorno.values.length; x++) {
//     ritorno.sum += ritorno.values[x]
//   }
//   return ritorno
// }

// console.log(rollTheDices(4))


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// const howManyDays = function (data) {
//   const dayNow = Date.now()

//   let dataDaconfrontare = new Date(data).getTime()
//   let differenza = Math.abs(dayNow - dataDaconfrontare)
//   let giorni = Math.floor((((differenza / 1000) / 60) / 60) / 24)
//   return giorni
// }

// console.log(howManyDays("12-10-2022"))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// const isTodayMyBirthday = function () {
//   const oggi = new Date()
//   const giornoCorrente = oggi.getDate()
//   const meseCorrente = oggi.getMonth() + 1

//   let parametroCompleanno = "1994-12-09" //Parametro data di nascita  <--------- personalizza qui il metodo per test, lascia formattazione anno-mese-giorno o si rompe il giochino

//   const meseParametro = function (parametroCompleanno) {

//     parametroCompleanno.split('')
//     let ritorno
//     primosplit = 0
//     secondoSplit = 0

//     for (let i = 0; i < parametroCompleanno.length; i++) {

//       if (parametroCompleanno[i] === "-" && primosplit > 0) {
//         secondoSplit = i
//       }
//       if (parametroCompleanno[i] === "-" && primosplit === 0) {
//         primosplit = i
//       }
//     }
//     ritorno = parametroCompleanno.slice(primosplit + 1, secondoSplit)
//     return ritorno
//   }

//   const giornoParametro = function (parametroCompleanno) {

//     parametroCompleanno.split('')
//     let index = 0
//     let ritorno = ""
//     let nSplit = 0
//     for (let i = 0; i < parametroCompleanno.length; i++) {
//       if (parametroCompleanno[i] === "-") {
//         nSplit++
//       }
//       if (nSplit === 2 && parametroCompleanno[i] !== "-") {
//         ritorno = ritorno + parametroCompleanno[i]
//       }
//     }
//     return ritorno
//   }

//   console.log("giorno compleanno " + parseInt(giornoParametro(parametroCompleanno)) + " mese compleanno " + meseParametro(parametroCompleanno))
//   console.log("data corrente " + giornoCorrente + " mese corrente " + meseCorrente)
//   if (parseInt(giornoCorrente) === parseInt(giornoParametro(parametroCompleanno)) && parseInt(meseCorrente) === parseInt(meseParametro(parametroCompleanno))) {
//     return true
//   } else {
//     return false
//   }

// }

// console.log(isTodayMyBirthday())


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// const deleteProp = function (obg, string) {
//   delete obg.string
//   return obg
// }

// let oggetto = {
//   num: 12,
//   string: "stringa casuale"
// }

// console.log(oggetto)
// console.log(deleteProp(oggetto, "string"))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  halfTree(3)
 
  *
  **
  ***
 
*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  tree(3)
 
    *
   ***
  *****
 
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
