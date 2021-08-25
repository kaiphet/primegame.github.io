function showPrimes(n) {

    for(let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
document.write("Write the web app to prompt accepting for a positive integer number If the entered text is not a positive integer number, then the web app will keep asking for a number until the valid positive integer is entered If the entered text is a positive integer, then the app will print prime numbers that are not greater than that given positive integer"
        )