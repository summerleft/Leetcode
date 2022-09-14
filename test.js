const n = parseInt(readline());
let hp = readline().split(" ");
hp = hp.map(item => parseInt(item));
let mp = 0;
for (let i = 0; i < n - 2; i++) {
    while (hp[i] >= 1 && hp[i + 1] >= 2 && hp[i + 2] >= 3) {
        mp = mp + 5;
        hp[i] = hp[i] - 1;
        hp[i + 1] = hp[i + 1] - 2;
        hp[i + 2] = hp[i + 2] - 3;
    }
}
hp.forEach((item) => {
    mp = mp + item;
})
console.log(mp);