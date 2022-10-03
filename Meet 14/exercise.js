const compareNum = (num1, num2) => {
    if (num1 > num2){
        return false;
    } else if (num2 > num1) {
        return true;
    } else {
        return -1;
    }
}

console.log(compareNum(5,3));
console.log(compareNum(5,6));
console.log(compareNum(5,5));
