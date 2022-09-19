
//QUESTION 1
const array = ['Rod', 'Jak', 'Gav', 'Gab'];

array.push('obama');

console.log('add obama', array);

array[2] = 'Dan';

console.log('add dan', array);

array.pop();

console.log('popped an element', array);

//Ex 2
const rikza = {
    namaDepan : 'Rikza',
    namaBelakang : 'Fatiyamulya',
    hobi : ['Reading Novel', 'Browsing Web', 'Gaming'],
    favouriteNumber : 2,
    memakaiKacamata : false,
    isMahasiswa : true,
}

console.log(rikza);

console.log(rikza.namaDepan);

rikza.favouriteNumber = 8;

console.log('Edit fav num', rikza);

rikza.hobi.push('Coding');

console.log('Hobi + Coding', rikza);

rikza.lulusan = 'Hacktivist';

console.log('lulusan added', rikza);

let tempArray = rikza.hobi;

tempArray.forEach((tempArray) =>  {
    console.log(tempArray);
});

// rikza.hobi.forEach((rikza.hobi) =>  {
//     console.log(rikza.hobi);
// });

Object.values(rikza);

Object.keys(rikza);

let arrayObject = Object.entries(rikza);

arrayObject.forEach((arrayObject) => {
    console.log(arrayObject);
});


//question 3
const dateNow = () => {
    var date = new Date();
	var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
    console.log (current_date);
};

dateNow();

const dateNow2 = () => {
    var date = new Date();
	var current_time = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
    return current_time;
}

dateNow2();

const dateNow3 = () => {
    var date = new Date();
	var current_time = date.getDate()+""+(date.getMonth()+1)+""+date.getFullYear();
    console.log(current_time);
    return Number(current_time);
}

dateNow3();

//Question 4

const setOfNum = [2, 3, 20, 21];

const oddEven = (number) => {
    let even = [];
    let odd = [];
    for (i = 0; i < number.length; i++){
        if (typeof number[i] === "number"){
            let temp = number[i] % 2;
            
            if (temp === 0){
                even.push(temp);
            } 
            else {
                odd.push(temp);
            }
        }
        else{
            return console.log(`Input invalid. ${number[i]} is not a number`);
        }
    }
    return even, odd;
}