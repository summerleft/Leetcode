let quickSort = function (arr) {
    qsort(arr, 0, arr.length - 1);
}

let qsort = function(arr, left, right) {
    if (left >= right) return;
    let pivot = partition(arr, left, right);
    qsort(arr, left, pivot - 1);
    qsort(arr, pivot + 1, right);
}

let partition = function(arr, left, right) {
    let pivot = arr[left];
    while (left < right) { // !!!!!! 一定要在外层增加一个while循环
        while (left < right && arr[right] >= pivot) {
            right--;
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    console.log(arr);

    return left;
}

arr = [3,1,5,2,6,4];
quickSort(arr);
console.log(arr);