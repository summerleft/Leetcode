/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let low = 0;
    let high = Math.max(...piles);
    let k = high;
    while (low < high) {
        const speed = Math.floor(low + (high - low) / 2);
        const time = getTime(piles, speed);
        if (time <= h) {
            k = speed;
            high = speed;
        } else {
            low = speed + 1;
        }
    }
    return k;
};

const getTime = (piles, speed) => {
    let time = 0;
    for (pile of piles) {
        time += Math.ceil(pile / speed);
    }
    return time;
}