//casenya semua data di array number ditambahkan 2
const arrayNumber = [10, 11, 13, 8, 9, 10]
const arrayPushed = []

arrayNumber.map((element, index) => {
    let temp = element + 2;
    arrayPushed.push(temp);
})

console.log(arrayPushed);

for (let index = 30; index > 0; index--) {
    if (index % 2 == 1) {
        console.log('*'.repeat(index))
    }
}