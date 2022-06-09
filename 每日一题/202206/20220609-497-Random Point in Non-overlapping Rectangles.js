/**
 * @param {number[][]} rects
 */
 var Solution = function(rects) {
    this.arr = [0];
    this.rects = rects;
    for (const rect of rects) {
        const a = rect[0], b = rect[1], c = rect[2], d = rect[3];
        this.arr.push(this.arr[this.arr.length - 1] + (c - a + 1) * (d - b + 1));
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let k = Math.floor(Math.random() * this.arr[this.arr.length - 1]);
    const rectIndex = binarySearch(this.arr, k + 1) - 1;
    k -= this.arr[rectIndex];
    const rect = this.rects[rectIndex];
    const a = rect[0], b = rect[1], c = rect[3];
    const col = c - b + 1;
    const da = Math.floor(k / col);
    const db = k - da * col;
    return [a + da, b + db];
};


const binarySearch = (arr, target) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const num = arr[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */