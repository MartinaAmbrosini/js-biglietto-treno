// CONSEGNA: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Messaggio di benvenuto 
alert("Benvenuto :");

// Chiedo all'User quanti km deve percorrere

// Visto da W3School: "The parseFloat() method parses a value as a string and returns the first number.""

const userKm = parseFloat(prompt("Quanti km devi fare?"));

// console.log(userKm)

// * Chiedo all'user quanti anni ha

const userAge = parseInt(prompt("Quanti anni hai?"));

// Moltiplico km per 0.21 

let price = userKm * 0.21;

// SE < 18 anni allora 20% sconto

if (userAge < 18) {
   price = price - ((price * 20) / 100);
}

// ALTRIMENTI SE > di 65 anni allora sconto 40%

else if (userAge > 65) {
    price = price - ((price * 40) / 100);
}

// cercato come realizzare in forma umana le cifre decimali: usare .ToFixed(n°di digits da far vedere)

const finalPrice = price.toFixed(2);

// VISTA BIGLIETTO SU SITO 

document.getElementById("my_id").innerHTML = "Il costo del tuo biglietto è ${finalPrice} €!";