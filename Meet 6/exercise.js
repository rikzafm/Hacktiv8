/**
 * diberikan sebuah input berupa nama bayi, berat badan, dan tinggi badan. apabila berat bayi lebih dari 10
kg dan tinggi badan diatas 70cm maka bayi dinyatakan sehat. jika berat badan bayi lebih dari 10 kg dan 
tinggi bayi kurang dari 70 cm, maka bayi dinyatakan kegemukan. dan apabila bayi berat badannya kurang dari 10 kg
dan tinggi badannya kurang dari 70 cm, maka bayi dinyatakan tidak sehat. dan apabila berat badan bayi kurang dari 10
kg dan tinggi lebih dari 70cm, maka bayi dinyatakan kekurusan. output berupa nama bayi dan keterangan kesehatan bayi
 */

let name = prompt("Enter name please: ", " ");
let weight = prompt("Weight: ", "");
let height = prompt("Height: ", "");
let healthStatus;

if (weight >= 10 && height >= 70){
    healthStatus = 'Healthy';
} else if (weight > 10 && height < 70) {
    healthStatus = 'Fat';
} else if (weight < 10 && height < 70) {
    healthStatus = 'Unhealthy';
} else {
    healthStatus = 'Skinny';
}

alert('Your Baby is ' + healthStatus);