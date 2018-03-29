var today=require("./index");
console.log(today.getCurrentDay("nz"));
// days without zeroes in front,3
console.log(today.getCurrentDay("nz"));
//days with zero in front,03
console.log(today.getCurrentMonth("mnu"));
//month with its number,04
console.log(today.getCurrentMonth("mna"));
//month with its name,April
console.log(today.getCurrentDate("nm"," "));
//month name, 3 April 2018 and delimteter " "
console.log(today.getCurrentDate("us","-"));
// us system and - between, 04-03-2018
console.log(today.getCurrentDate("eu","/"));
// eu system and / between,03/04/2018