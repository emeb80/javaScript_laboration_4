/* Lösning till Uppgift 7 -"Arrayer med funktioner". Av Eva Bergström, 2026 */
"use strict";

let numbers = [13, 17, 7, 11, 16, 32]; //array//

function calculateSum(numbers) {
  //funktionen//

  let sum = 0; //startvärdet är 0//

  for (let i = 0; i < numbers.length; i++) {
    //loopen fortsätter så lång arrayen är//

    sum = sum + numbers[i]; //lägg ihop summa med nästa steg i arrayen dvs 0+13 -> 13+17 -> 30+7 osv//
  }
  return sum; //svaret som skickas är totalsumman av talen i arrayen
}

console.log("Summan är:", calculateSum(numbers));
