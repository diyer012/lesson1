/**
 * Created by Dhruva Iyer on 9/8/2016.
 */
//lonk to the node filesystem library to read text files
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt', 'utf-8');

// print food heading
console.log('FOOD');

// print food list

console.log(food);


//open and read drink list
var drink =  fs.readFileSync('drinks.txt', 'utf-8');

//print drinks heading
console.log('\nDRINKS');

//print drinks list
console.log(drink);