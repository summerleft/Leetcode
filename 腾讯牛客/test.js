let allData = [[[1,2], [3,4], [5,6], [1,6]],   [1,2], [3,4], [5,6], [7,8]];

let res = [];
for (let input of allData) {
    console.log(input);
    let circle = [];
    for (let relation of input) {
        if (!circle.length) {
            let set = new Set([...relation]);
            circle.push(set);
            console.log('circle')
            console.log(circle);
        } else {
            let temp = 0
            for (let cur of circle) {
                console.log('cur1')
                console.log(cur)
                
                for (let people of relation) {
                    if (cur.has(people)) {
                        cur.add(...relation);
                        console.log('cur2')
                        console.log(cur);
                        temp = 1;
                        break;
                    }
                }
                if (!temp) {
                    circle.push(new Set([...relation]));
                    console.log('circle')
                    console.log(circle);
                }
            }      
        }
    }
    res = circle.map((set) => set.size);  
}

// for (let i = 0; i < res.length; i++) {
//     if (i !== res.length - 1) {
//         console.log(res[i]);
//         console.log('\n')
//     }else {
//         console.log(res[i]);
//     }
// }