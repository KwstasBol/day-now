#day-now

Day-now gets current month,day,year and displays them based on some filters.

##Usage

```js
var today=require('day-now');
console.log(getCurrentDay("nz"));
// days without zeroes in front,3
console.log(getCurrentDay("nz"));
//days with zero in front,03
console.log(getCurrentMonth("mnu"));
//month with its number,04
console.log(getCurrentMonth("mna"));
//month with its name,April
console.log(getCurrentDate("nm"," "));
//month name, 3 April 2018 and delimteter " "
console.log(getCurrentDate("us","-"));
// us system and - between, 04-03-2018
console.log(getCurrentDate("eu","/"));
// eu system and / between,03/04/2018
```
##Licence

Apache 2.0
