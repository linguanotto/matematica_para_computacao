"use strict";
/* Enumeração para os meses do ano*/
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
console.log("January:", Months.January);
console.log("February:", Months.February);
console.log("March:", Months.March);
console.log("April:", Months.April);
console.log("May:", Months.May);
console.log("June:", Months.June);
console.log("July:", Months.July);
console.log("August:", Months.August);
console.log("September:", Months.September);
console.log("October:", Months.October);
console.log("November:", Months.November);
console.log("December:", Months.December);
