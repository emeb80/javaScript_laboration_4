/* Lösning till Uppgift 3 -"Ålderskategorisering" Av Eva Bergström, 2026 */
"use strict";
let age=12;
if (age<18){
    console.log("Barn")//Bestämmer kategori om åldern är mindre än 18//
}
else if (age<65){//Använder sig av if-satsen men lägger till en övre gräns på 65//
    console.log("Vuxen")
}
else{//Detta meddelandet visar för alla som ej passar in i de föregående vilkoren//
    console.log("Pensionär")
} 