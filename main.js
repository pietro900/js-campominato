//Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".;
//In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata;
//Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
//La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

//chiedo al pc di scegliere 16 numeri casuali tra 1 e 100;
var numero_pc = [];

for (var i = 1; i <= 16 ; i++) {
    getRndInteger(1, 100);
    numero_pc.push(getRndInteger(1, 100));
    //console.log(i + "numero scelto");
    //console.log(numero_pc);
}
console.log(numero_pc);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var tentativi = 0;
//chiedo all'utente di inserire un numero tra uno e 100
do {
    var numero_utente = parseInt(prompt("inserisci un numero tra 1 e  100"));
    tentativi++
    //console.log("numero scelto dall'utente:" + numero_utente);
} while (!numero_pc.includes(numero_utente));
console.log("il numero scelto è: " + numero_utente + " dopo " + tentativi + " tentativi")

//devo controllare che il numero scelto dall'utente nn sia tra quelli scelti dal pc;
var mine;
//cerco in tutto array se il numero dell'utente nn sia presente;
for (var i = 0; i < numero_pc.length; i++) {
    // numero utente e numero pc sono uguali?
    if(numero_utente == numero_pc[i]){
    mine = true;
    };
};

if (mine == true) {
    console.log("hai perso");
}
else {
    console.log("hai vinto continua a giocare");
}
