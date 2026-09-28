/* Lösning till Uppgift 2 - Beräkning av pris & pris med moms. Av Eva Bergström, 2026 */
"use strict";
let cost=100;
let quantity=3;
let totalPrice=cost*quantity; //räknar ut totalsumman//
let totalWithVat=totalPrice*1.25;//lägger till momssatsen på totalpriset//
console.log(`Pris: ${cost} kr`);
console.log(`Antal: ${quantity}`);
console.log(`Totalt: ${totalPrice} kr`);
console.log(`Totalt inklusive moms: ${totalWithVat} kr`);