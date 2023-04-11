console.log('JS sourced');
let cities = 'Hudson, St.Paul, St.Paul, Farmington';


console.log(Array.isArray(cities)); //output is false


let splits = cities.split(", ", 4);
console.log(splits); //output is ['Hudson', 'St.Paul', 'St.Paul', 'Farmington']


if(document.getElementById(`cityList`) != null) {
let cityList = document.getElementById(`cityList`);
}
for (let city of splits){
   console.log(city);
   cityList.innerHTML += `<li>${city}</li>`; // Loop over each city and append to the dom with `innerHTML`
}


let hasMinneapolis;
for (let city of cities) {
 if (city === 'Minneapolis') {
 hasMinneapolis = true;
 break;
}
}
if (hasMinneapolis) {
 console.log('Minneapolis');
} else {
console.log('Minneapolis is not listed'); //Check whether or not your array contains 'Minneapolis' using a `for loop`
}


 if (cities.includes('Minneapolis')) {
 console.log('Minneapolis');
 } else {
   console.log ('Minneapolis not listed'); // Check whether or not your array contains 'Minneapolis' using a build in method
 }


console.log(cities.trim()); // removed white spaces around string




let newList = [...new Set(splits)];
