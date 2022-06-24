// RANDOM PICK

let randomPick = (n, min, max) => {

    //define variables
    let range = max - min + 1;
    let result;

    //some input validation
    try {
        if (range <= 0) throw "El máximo debe ser mayor que el mínimo";
        if (n <= 0) throw "La cantidad de números a escoger ha de ser positiva";
        if (n > range) throw "La cantidad de números a escoger ha de ser menor que el rango";

        //generate numbers
        result = [];
        let number;
        while (result.length < n) {
            number = Math.floor(Math.random() * range) + min;
            if (!result.includes(number)) result.push(number);
        }
    }
    catch (err) {
        result = "Error en la operación: " + err;
    }
    return result;
}

// START PROGRAM
console.log(randomPick(32, -88, 100));