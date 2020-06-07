//Exercise 2
// Create some variables with the following names and values:
// color: purple
let color = "purple";
// number: 10
let number = 10;
// word: cool
let word = "cool";

// Change the background color of the first box to purple, if the color is purple
if (color === "purple") {
    $('.North').css('background-color', 'purple');
}

// Change the text of the second
// if the number is bigger than 100 to "whoah, that's a big number".
// otherwise "just a regular number, please".
let changed_text;
if (number > 100) {
    changed_text = "whoah, that's a big number";
} else {
    changed_text = "just a regular number, please.";
}
$('.East').text(changed_text);

// Change the text to "Power of DOM" of the third if the "word" is cool, otherwise change the fourth one
if (word === "cool") {
    $('.South').text("Power of DOM");
} else {
    $('.West').text("Power of DOM");
}

// console.log("Test");