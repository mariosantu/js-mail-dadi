//Generare un numero random da 1 a 6 per l'utente e per il pc e vince chi fa il punteggio più alto 

//alert inizio gioco
alert('Benvenuto, premi ok o invio per iniziare a giocare')

//numero rundom utente

var numeroCasualeUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasualeUtente);


//numero random pc

var numeroCasualePc = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasualePc);



//stabilisco il vincitore

if (numeroCasualePc > numeroCasualeUtente) {
    alert('Hai perso!')
} else {
    alert('Hai vinto!')
}