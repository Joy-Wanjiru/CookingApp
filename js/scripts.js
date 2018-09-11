var multiply = function(gallons) {
return gallons * 3.78541;
};
var gallons = parseInt(prompt ("How many gallons would you like to convert?"));
var litres = multiply (gallons, 3.78541);
alert ("You have" + litres);
