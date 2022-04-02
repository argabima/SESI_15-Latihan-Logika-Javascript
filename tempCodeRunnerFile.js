function threestepAB(arr) {
    var n = arr.length;
    var arrayText = arr.split(' ');

    var i = 0;
    while (i < n) {

        if ((arrayText[i] == "a" && arrayText[i + 4] == "b") || (arrayText[i] == "b" && arrayText[i + 4] == "a"))
        {
            return true
        break
    }
    i++
}

    return false;
}


console.log(threestepAB('you are boring'))