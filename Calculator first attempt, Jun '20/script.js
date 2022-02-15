//onclick functions (from html page) are called: number, point, clear, posneg, percent, divide, multiply, minus, plus, equals.

//ideas: concat function?

//still to fix:
//Pemdas, pemdas display, percent
//clear vs AC (also in css) (clear once: empty numberString, clear twice empty mathArray), equals
//style change after clicking an operator to show what was pressed
//5 + = NaN problem
//when you click a number a bunch, it highlights the symbol, fix this = user-select:none in css
//when you divide by zero say something cute/snarky; infinity symbol instead?
//correct infinity operations,
//fix decimal integer morph in numberString function

//variables:
let numberString = "0"; //string, holds the numbers until an operand is pressed
let mathArray = []; //array, holds operators (int) and operands (string) in order
let plus = "+"; //string (workaround, symbol strings didn't work in html)
let minus = "-"; //string
let multiply = "*"; //string
let divide = "/"; //string

function storeNumber(sign) {
    numberString = parseInt(numberString); //turns numberString string into integer** won't work with decimal, silly
    mathArray.push(numberString); //adds numberString string to mathArray array
    alert(mathArray); //remove later
}

function equals() {
    //mathArray = [];
    //find position of first *, spot
    //multiply spot-1 and spot+1
    //slice out spot-1 through spot+1, replace with result
    //loop until no *
    //repeat with divide, then plus, then minus
    //needs display of running total
    storeNumber();
    let count = mathArray.length - mathArray.sort().indexOf("*");
    var i;
    for (i = 0; i < count; i++) {
        let operandOne = mathArray[mathArray.indexOf("*") - 1];
        let operandTwo = mathArray[mathArray.indexOf("*") + 1];
        let result = operandOne * operandTwo;
        mathArray.splice(mathArray.indexOf("*") - 1, 3, result);
    }
    alert(mathArray);
}

function operate(sign) {
    if (numberString == "") {
        mathArray.pop(); //removes last element in array (hit plus accidentally?)
    }
    storeNumber(sign); //adds numberString to mathArray
    mathArray.push(sign); //adds sign to mathArray array
    numberString = ""; //causes problems in posneg, test: 5 + +/- 0 . 5
}

function posneg() {
    if (numberString.includes("-") == true) {
        //if numberString is already negative
        numberString = numberString.substring(1); //make it positive.
    } else {
        numberString = "0" + numberString;
        trim(numberString);
        numberString = "-" + numberString;
    }
    showAnswer(numberString); //and display it
}

//finished below***********************************************
function number(buttonValue) {
    numberString = numberString + buttonValue; //adds number to end of string 'numberString'
    trim(); //0 can only be first if followed by .
    showAnswer(numberString); //displays it
}

function showAnswer(display) {
    //displays input on the calculator screen
    document.getElementsByClassName("answer")[0].innerHTML = display;
}

function trim() {
    if (numberString.includes("0.") == false) {
        //if numberString does not contain "0.":
        if (numberString.indexOf("0") == 0) {
            //and if 0 is first in string
            numberString = numberString.substring(1); 
            //delete first character in string
        }
        if (numberString.indexOf("-0") == 0) {
            //or if numberString starts with "-0"
            numberString = numberString.slice(0, 1) + numberString.slice(2); 
            //delete second character in string
        }
    }
}

function point() {
    if (numberString.includes(".") == false) {
        numberString = numberString + "."; //if numberString doesn't include "." already, add "."
        showAnswer(numberString); //display it
    }
}
