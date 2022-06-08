/**
 * @param {number[][]} points
 * @return {boolean}
 */
 var isBoomerang = function(points) {
    const [x1, y1, x2, y2, x3, y3] = [points[0][0], points[0][1], points[1][0], points[1][1], points[2][0], points[2][1]];
    if (x1 === x2 && x1 === x3 && y1 !== y2 && y1 !== y3 && y2 !== y3) return false;
    const grad1 = (y2 - y1) / (x2 - x1);
    const grad2 = (y3 - y1) / (x3 - x1);
    return grad1 !== grad2 && !((x1 === x2 && y1 === y2) || (x1 === x3 && y1 === y3) || (x2 === x3 && y2 === y3)) ;
};