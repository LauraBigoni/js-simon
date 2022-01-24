console.log('JS OK!');
/* 
TRACCIA:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero

Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// # FUNZIONI
function getRandomNumber(min, max, list) {
    let randNumber;
    do {
        randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (list.includes(randNumber));
    return randNumber;
};


// # Genero 5 numeri casuali in un prompt da mostrare all'utente
const extractedNumbers = [];
for (let i = 0; i < 5; i++) {
    const numbers = getRandomNumber(1, 100, extractedNumbers);
    extractedNumbers.push(numbers);
};
console.log(extractedNumbers);

alert(`I numeri da ricordare sono: ${extractedNumbers}`);


// # all'OK della chiusura dell'alert faccio partire il CD
const userNumbers = [];

const timer = setTimeout(function () {
    while (userNumbers.length < 5) {
        const message = parseInt(prompt('Inserisci i numeri'));
        if (message > 100 || message <= 0) {
            alert('Non puoi scrivere numeri non validi!');
        } else {
            userNumbers.push(message);
        }
    }
    console.log(userNumbers);
    
    // # il software dice quanti e quali dei numeri sono stati indovinati dall'utente
    const guessedNumbers = extractedNumbers.filter(number => userNumbers.includes(number));
    console.log(guessedNumbers);
}, 3000);

