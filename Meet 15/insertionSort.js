function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            let current = arr[i];
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
            console.log(arr, 'insertion sort');
        }
    return arr;
}

let input = [23, 45, 2, 8, 4, 12, 22, 50, 19]

insertionSort(input);