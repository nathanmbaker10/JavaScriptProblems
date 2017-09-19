/**
 * Created by h205p3 on 9/12/17.
 */
/**
 * Created by h205p3 on 9/12/17.
 Nathan Baker, Period 3, JavaScript Problems 9/12/17
 */


// Depending on whether it is a weekDay or a vacation day, we will tell the user to sleep in or not.
function sleep_in(weekDay, vacation) {
    if (typeof weekDay == "number" || typeof vacation == "number") {
        return undefined;
    }

    var weekDayBool;
    var vacationBool;


    if (typeof weekDay == "string") {
        weekDayBool = stringBoolToBool(weekDay);
    } else {
        weekDayBool = weekDay;
    }

    if (typeof vacation == "string") {
        vacationBool = stringBoolToBool(vacation);
    } else {
        vacationBool = vacation;
    }

    if(weekDayBool == undefined || vacationBool == undefined) {
        return false;
    }

    if (!weekDayBool || vacationBool) {
        return true;
    } else {
        return false;
    }
}
// must put the stringBoolToBool in tester for sleep_in and monkey_trouble
function stringBoolToBool(string) {
    if  (string == 'true' || string == 'yes') {
        return true;
    } else if (string == 'false' || string == 'yes') {
        return false;
    } else {
        return undefined
    }
}

function monkey_trouble(a_smile, b_smile) {
    if (typeof a_smile == "number" || b_smile == "number") {
        return false;
    }

    if (typeof a_smile == "string") {
        a_smile = stringBoolToBool(a_smile);
    }

    if (typeof b_smile == "string") {
        b_smile = stringBoolToBool(b_smile);
    }


    if ((a_smile && b_smile) || (!a_smile && !b_smile)) {
        return true;
    } else {
        return false;
    }

}

function String_times(string, number) {
    var output;
    for(var i = 0; i<number; i++) {
        output = output + string;
    }
    return output;
}

function front_times(string, number) {
    var front = '';
    if (string.length < 3) {
        front = string;
    } else {

        for (var i = 0; i < 3; i++) {
            front += string[i];
        }
    }
    var output = '';
    for(var i = 0; i<number; i++) {
        output+= front;
    }
    return output;
}

function string_bits(str) {
    output = ''
    for(var i = 0; i < str.length; i+=2) {
        output += str[i];
    }
    return output;
}

function caughtSpeeding(speed, birthday) {
    var limits = [60, 80];
    if (birthday) {
        for (var i = 0; i < limits.length; i++) {
            limits[i] += 5;
        }
    }

    if (speed <= limits[0]) {
        return 0;
    } else if (speed > limits[0] && speed <= limits [1]) {
        return 1;
    } else {
        return 2;
    }

}

function fizz_buzz(num) {
    var output = '';
    if (num % 3 == 0) {
        output += 'Fizz';
    }
    if (num % 5 == 0) {
        output += 'Buzz';
    }
    if (output.length < 3) {
        output = num + '!';
    }

    return output;
}

function teaParty(candyNum, teaNum) {
    if  (candyNum < 5 || teaNum < 5) {
        return 0;
    } else {
        if (candyNum >= teaNum * 2 || teaNum >= candyNum * 2) {
            return 2;
        } else {
            return 1;
        }
    }
}

function blackjack(number1, number2) {
    var difference1 = 21 - number1;
    var difference2 = 21 - number2;

    if(difference1 < 0 && difference2 < 0) {
        return 0;
    } else if(difference1 < 0) {
        return number2;
    } else if(difference2 < 0) {
        return number1;
    } else {
        if (difference1 < difference2) {
            return number1;
        } else {
            return number2;
        }
    }
}

function loneSum(num1, num2, num3) {
    if (num1 == num2 && num2 == num3) {
        return 0;
    } else if (num1 == num2) {
        return num3;
    } else if (num2 == num3) {
        return num1;
    } else if (num1 == num3) {
        return num2;
    } else {
        return num1 + num2 + num3;
    }
}


