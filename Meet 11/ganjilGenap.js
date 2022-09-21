const setOfNum = [11, 100, 20, 59, 1000, 4000, -9];

const oddEven = (number) => {
    let even = [];
    let odd = [];
    for (i = 0; i < number.length; i++){

        if (number[i] > 999 || number[i] < 2){
            continue;
        }

        if (typeof number[i] === "number"){
            let temp = number[i] % 2;
            
            if (temp === 0){
                even.push(number[i]);
            } 
            if (temp === 1) {
                odd.push(number[i]);
            }
        }
        else{
            return console.log(`Input invalid. ${number[i]} is not a number`);
        }
    }

    console.log(`The even numbers are : ${even}`);
    console.log(`The odd numbers are : ${odd}`);
}

oddEven(setOfNum);