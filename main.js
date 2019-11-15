var email_valide = ["pasquale@gmail.com" , "mario@libero.it" , "luigi@gmail.com" , "marco@hotmail.it"];

var email_utente = prompt("Inserisci la tua e-mail");

console.log('la tua email è: ' + email_utente );





for (var i = 0;  (email_valide[i] != email_utente) && i < email_valide.length ; i++) {



}


if (email_valide[i] == email_utente ) {

    console.log("Complimenti, hai eseguito l'accesso al nostro sito.");

} else {
    console.log('Siamo spiacenti, la tua e-mail non è stata registrata.');
}
