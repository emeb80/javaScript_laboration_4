/* Lösning till Uppgift 9 -"Program för information om Person (stad, namn och myndig/icke myndig)". Av Eva Bergström, 2026 */
"use strict";

const persons = [
  //array med objekt//
  { name: "Morris", age: 16, city: "Lund" },
  {
    name: "Anita",
    age: 37,
    city: "Bårslöv",
  },
  {
    name: "Poppe",
    age: 61,
    city: "Helsingborg",
  },
];

for (let i = 0; i < persons.length; i++) {
  //loop som går genom arrayens fulla längd//
  printPerson(persons[i]); //funktionen körs för varje objekt//
}

function printPerson(persons) {
  if (persons.age >= 18) {
    //anger vilkor för en person som är under 18//
    console.log(persons.name + " bor i " + persons.city + " och är myndig.");
  } else {
    //om vilkoret i if-satsen inte är uppfyllt visas detta//
    console.log(
      persons.name + " bor i " + persons.city + " och är inte myndig.",
    );
  }
}
