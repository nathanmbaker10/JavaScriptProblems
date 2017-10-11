/**
 * Created by h205p3 on 9/19/17.
 */

function tester() {
    document.getElementById("output").innerHTML =countClumps([1, 2, 2, 3, 4, 4]);
}
function firstLast6(numArr) {
    if (numArr[0] == 6 || numArr[numArr.length -1] == 6) {
        return true;
    } else {
        return false;
    }
}

function has23(numArr) {
    if (numArr[0] == 2 || numArr[1] == 2 || numArr[0] == 3 || numArr[1] == 3) {
        return true;
    } else {
        return false;
    }
}

function fix23(numArr) {
    var was2;
    for (var i = 0; i < numArr.length; i++) {
        if (was2 && numArr[i] == 3) {
            numArr[i] = 0;
            was2 = false;
        } else if (numArr[i] == 2) {
            was2 = true;
        } else {
            was2 = 0;
        }
    }

    return numArr;
}

function countYZ(str) {
    var wasZY;
    var numWords = 0;
    for (var i = 0; i < str.length; i++) {
        if (wasZY && str[i] == " ") {
            wasZY = false;
            numWords += 1;
        } else if(str[i] == 'y' || str[i] == 'z' || str[i] == "Z" || str[i] == "Y") {
            wasZY = true;
        } else {
            wasZY = false;
        }
    }
    if (wasZY) {
        numWords += 1
    }
    return numWords;

}

function endOther(str, str1) {
    str = str.toLowerCase();
    str1 = str1.toLowerCase();
    var smaller;
    var larger;
    if  (str.length > str1.length) {
        smaller = str1;
        larger = str;
    } else if (str.length == str1.length) {
        if (str == str1) {
            return true;
        } else{
            return false;
        }
    } else {
        smaller = str;
        larger = str1;
    }

    larger = larger.substring(larger.length - smaller.length);
    if (larger == smaller) {
        return true;
    } else {
        return false;
    }

}

function starOut(str) {
    var output = '';
    var removeList =  {};
    var wasStar = false;
    for(var i = 0; i < str.length; i++) {
        if (str[i] == '*') {
            removeList[i] = true;
            removeList[i-1] = true;
            removeList[i+1] = true;
        } else {
            if(removeList[i] != true) {
                removeList[i] = false;
            }
        }
    }

    for(var u = 0; u < str.length; u++) {
        if (removeList[u] != true) {
            output += str[u];
        }
    }
}

function getSandwich(str) {
    var breadIndicies = [];
    var output = ''
    for(var i = 0; i < str.length; i++) {
        if (str.substring(i, i + 5) == 'bread') {
            breadIndicies.push(i + 4);
        }
    }

    if (breadIndicies[0] == breadIndicies[1]) {
        return '';
    } else {
        if (breadIndicies.length > 2) {
            breadIndicies = [breadIndicies[0], breadIndicies[breadIndicies.length - 1]]
        }
        breadIndicies[1] -= 4
    }



    for(var i = 0; i < str.length; i++) {
        if (i > breadIndicies[0] && i < breadIndicies[1]) {
            output += str[i]
        }
    }

    return output;
}

function canBalance(arr) {
    var totalSum = 0;
    var currSum = 0;
    for(var i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    for(var i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum == totalSum / 2) {
            return true;
        }
    }
    return false;
}

function countClumps(arr) {
    var clumps = 0;
    var currNum;
    var onClump = false;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] != currNum && onClump) {
            clumps++;
            onClump = false;
        } else if (arr[i] == currNum && !onClump) {
            onClump = true;
        }

        currNum = arr[i];


    }
    if (onClump) {
        clumps++;
    }
    return clumps;
}

function evenlySpaced(num, num1, num2) {
    if(num == num1 || num2 == num1 || num2 == num){
        if (num1 == num2 && num2 == num) {
            return true;
        } else {
            return false;
        }
    }

    var firstDifference = Math.abs(num1 - num2);
    var secondDifference = Math.abs(num2 - num);
    var thirdDifference = Math.abs(num - num1)

    if (firstDifference == secondDifference || thirdDifference == secondDifference || firstDifference == thirdDifference) {
        return true;
    } else {
        return false;
    }
}
