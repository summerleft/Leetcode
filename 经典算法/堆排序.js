let heapSort = function(arr) {
    let n = arr.length;
    for (let i = n; i > 1; i--) {
        hSort(arr, i)
        if (i !== 1) {
            [arr[0], arr[i - 1]] = [arr[i - 1], arr[0]];
        }
        
    }
}

let hSort = function(arr, heapSize) {
    let lastRoot = Math.floor(heapSize / 2) - 1;
    for (let i = lastRoot; i>= 0; i--) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
        }
    }
}

let arr = [3,1,4,2,5,3];
heapSort(arr);
console.log(arr);