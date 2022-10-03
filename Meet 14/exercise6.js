const fpb = (num1, num2) => {
    if(!num2) {
        return num1;
    }

    return fpb(num2, num1 % num2);
}

console.log(fpb(12, 16));
console.log(fpb(50, 40));
console.log(fpb(22, 99));