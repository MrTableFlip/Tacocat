function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let regSpace = new RegExp("[ ]+", "g");
    let cleanedWord = userWord.replace(regSpace, "");

    let start = userWord.length - 1;
    let startClean = cleanedWord.length - 1;

    let reverseWord = "";
    let reverseClean = "";

    for (let i = start; i >= 0; i--) {
        reverseWord += userWord[i];
    }

    for (let i = startClean; i >= 0; i--) {
        reverseClean += cleanedWord[i];
    }

    let holder1 = cleanedWord.toLowerCase();
    let holder2 = reverseClean.toLowerCase();

    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;

    if (holder1 === holder2) {
        document.getElementById("isPali").innerText = "This is a Palindrome";
    } else {
        document.getElementById("isPali").innerText = "This is not a Palindrome";
    }
}