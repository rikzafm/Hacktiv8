function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    if(!results){
        return -1
    }

    return results
}

let input = [23, 45, 2, 8, 4, 2, 12, 22, 50, 19]

console.log(linearSearch(input, 12));

console.log(globalLinearSearch(input, 2));