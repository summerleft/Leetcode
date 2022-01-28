function generateMatrix(n: number): number[][] {
  const result: number[][] = Array.from( {length: n} ).map(() => Array(n))
  let num: number = 1;
  let top: number = 0, right: number = n - 1, bottom: number = n - 1, left: number = 0;
  while(num <= n ** 2) {
    for (let i:number = left; i <= right; i++) {
      result[top][i] = num++;
    }
    top++;
    for (let i: number = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    right--;
    for (let i: number = right; i >= left; i--) {
      result[bottom][i] = num++;
    }
    bottom--;
    for (let i: number = bottom; i >= top; i--) {
      result[i][left] = num++;
    }
    left++;
  }
  return result;
}