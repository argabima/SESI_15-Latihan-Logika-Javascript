function compareNumbers(fisrtNumber, secondNumber) {
    if (fisrtNumber < secondNumber) {
        return true
    } else if (fisrtNumber > secondNumber) {
        return false
    } else {
        return ("-1")
    }
}
console.log(compareNumbers(5, 8));

function reverseString(str) {
    var stringbaru = "";
    for (var i = str.length - 1; i >= 0; i--) {
        stringbaru += str[i];
    }
    return stringbaru;
}

console.log(reverseString('Hello World and Coders'));


function urutHuruf(str) {
    var arraySplit = str.split("");
    var arraySort = arraySplit.sort();
    var arrayJoin = arraySort.join("");
    return arrayJoin;
}

console.log(urutHuruf("halo"));

function isAritmeticProgression(arr) {
    var selisih = arr[1] - arr[0];
    var n = arr.length;

    for (var i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] != selisih) {
            return false;
        }
    }

    return true;
}


console.log(isAritmeticProgression([1, 3, 5, 7, 9, 11]))

function threestepAB(text) {
    var n = text.length;
    var arrayText = text.split(' ');

    var i = 0;
    while (i < n) {

        if ((arrayText[i] == "a" && arrayText[i + 4] == "b") || (arrayText[i] == "b" && arrayText[i + 4] == "a")) {
            return true
            break
        }
        i++
    }

    return false;
}


console.log(threestepAB('you are boring'))

function gcg(fisrtNumber, secondNumber) {
    let result = [];
    let kecil, besar;
    if (fisrtNumber <= secondNumber) {
        kecil = fisrtNumber;
    } else {
        kecil = secondNumber;
    }
    if (fisrtNumber >= secondNumber) {
        besar = fisrtNumber;
    } else {
        besar = secondNumber;
    }
    for (let i = 1; i < kecil; i++) {
        if (kecil % i == 0 && besar % i == 0) {
            result.push(i);
        }
    }
    return Math.max(...result);
}

// TEST CASES
console.log(gcg(12, 16)); // 4
console.log(gcg(50, 40)); // 10
console.log(gcg(22, 99)); // 11
console.log(gcg(24, 36)); // 12
console.log(gcg(17, 23)); // 1

function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime1(7)); //Output: True
console.log(isPrime1(6));



function isPrimary(number) {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        }
        return false;
    }
}


function input(a, b) {
    var arr_Prime = [];
    var arr_notPrime = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (isPrimary(i)) {
                arr_Prime.push(i);
            } else {
                arr_notPrime.push(i);
            }

        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            if (isPrimary(i)) {
                arr_Prime.push(i);
            } else {
                arr_notPrime.push(i);
            }

        }
    }
    console.log(arr_Prime);

}

input(15, 10);