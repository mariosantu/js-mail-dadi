//Chiedere mail all'utente 
//controllare che sia in lista (arrey) e stampare un messaggioveirficando che sia in lista

//chiedo mail all'utente

var mailUtente = prompt('Qual è la tua mail?');

//lista mail
 
var listaMail = ['mario@mail.com', 'giovanni@mail.com', 'marco@mail.com', 'lino@mail.com', 'luigi@mail.com'];
console.log(listaMail);
console.log(listaMail.lenght);

//verifico che la mail sia contenuta nel mio array

var emailTrovata = false;

for( var i = 0; i < listaMail.length; i++ ) {

    if (listaMail[i] === mailUtente) {
        emailTrovata = true;
    }
}

if (emailTrovata === true) {
    alert('mail trovata');
} else {
    alert('non ho trovato nessuna mail');
}













