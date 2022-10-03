const isPrime = (num) => {
    if (num === 2 || num === 3 ){
        return true;
    } else if (num % 2 === 0 || num % 3 === 0){
        return false;
    } else {
        return true;
    }
}


console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(2));
console.log(isPrime(2539));