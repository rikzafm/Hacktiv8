function selectionSort(arr) { 
    for(let i = 0; i < arr.length; i++) {
        let min = i;

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;
             console.log(arr, 'process');      
        }
        console.log(arr, 'SelectionSort');
    }
    return arr;
}

let input = [23, 45, 2, 8, 4, 12, 22, 50, 19]

selectionSort(input);