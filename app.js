// DEFINING VARIABLES
let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

let plainTextarea = document.getElementById("plain-text");
let encryptedTextarea = document.getElementById("encrypted-text");
let transformedString = "";

// Transform function
let transform = function (inputTextarea, outputTextarea, inputAlphabet, outputAlphabet) {
    let inputString = inputTextarea.value.toLowerCase();
    for (let letter of inputString) {
        inputLetterIndex = inputAlphabet.indexOf(letter);
        transformedString += (inputLetterIndex === -1) ? letter : outputAlphabet[inputLetterIndex];
    }
    outputTextarea.value = transformedString;
    transformedString = "";
};


// Buttons event binding
// Testing 2 forms of calling functions with parameters inside addEventListener
document.getElementById("encrypt-button")
    .addEventListener("click", transform.bind(null, plainTextarea, encryptedTextarea, plainAlphabet, encryptedAlphabet), false);
document.getElementById("decrypt-button")
    .addEventListener("click", function () {
        transform(encryptedTextarea, plainTextarea, encryptedAlphabet, plainAlphabet);
    }, false);

// Reset button
document.getElementById("reset-button").addEventListener("click", () => {
    plainTextarea.value = "";
    encryptedTextarea.value = "";
});

