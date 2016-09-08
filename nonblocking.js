/**
 * Created by Dhruva Iyer on 9/8/2016.
 */

//lin+k to the node filesystem library to read text files
var fs = require('fs');

// load food asynchronously

var food = fs.readFile('food.txt', 'utf-8', function(err, food) {
    // dsplay food list when done
    if (err) {
        console.log(err);
    } else {
    }
    console.log(food);
});


//print food heading

console.log('FOOD');

//load drinks asynchronously
var drinks = fs.readFile('drinks.txt', 'utf-8', function(err, drinks) {
    // dsplay drinks list when done
    if (err) {
        console.log(err);
    } else {
        console.log('DRINKS');
        console.log(drinks);
    }

});


