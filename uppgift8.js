/* Lösning till Uppgift 8 -"Skapa Objekt - Bok". Av Eva Bergström, 2026 */
"use strict";

const book = {
  //Objekt
  title: "En man som heter Ove",
  author: "Fredrik Backman",
  year: 2012,
};

function displayBook(book) {
  //funktionen som gör att de olika egenskaperna skrivs ut när funktionen anropas//
  console.log("Titeln: " + book.title);
  console.log("Författare: " + book.author);
  console.log("Publiceringsår: " + book.year);
}

displayBook(book); //anrop av funktion
