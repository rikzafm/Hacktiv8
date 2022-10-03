const listPrime = (num1, num2) => {
   const arr = []; 
    for(let i = num1+1; i < num2; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}

const isPrime = (num) => {
    if (num === 2 || num === 3 ){
        return true;
    } else if (num % 2 === 0 || num % 3 === 0){
        return false;
    } else {
        return true;
    }
}

console.log(listPrime(1, 5));
console.log(listPrime(5, 10));
console.log(listPrime(10, 20));

