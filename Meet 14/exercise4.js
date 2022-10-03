const deretAritmatika = (arr) => {
    const gap = arr[1] - arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] - arr[i-1] != gap){
            return console.log(false);
        }
    }
    return console.log(true);
}

const num = [1,3,5,7,9,11];
const num2 = [ 1, 3, 4, 5, 6, 8, 9]

deretAritmatika(num);
deretAritmatika(num2);