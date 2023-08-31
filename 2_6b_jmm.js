"use strict";
/* Enumeração para os dias da semana*/
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
console.log("Domingo:", Days.Sunday);
console.log("Segunda-feira:", Days.Monday);
console.log("Terça-feira:", Days.Tuesday);
console.log("Quarta-feira:", Days.Wednesday);
console.log("Quinta-feira:", Days.Thursday);
console.log("Sexta-feira:", Days.Friday);
console.log("Sábado:", Days.Saturday);
