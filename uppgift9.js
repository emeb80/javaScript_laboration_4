/* Lösning till Uppgift 9 -"Program för information om Person (stad, namn och myndig/icke myndig)". Av Eva Bergström, 2026 */
"use strict"

const persons=[ //array med objekt//
    {name:"Morris",
        age:16,
        city:"Lund",
    },
    {
        name:"Anita",
        age:37,
        city:"Bårslöv",
    },
    {
        name:"Poppe",
        age:61,
        city:"Helsingborg"
    }
];

for (let i = 0; i < persons.length; i++){
    console.log(persons[i]);
}