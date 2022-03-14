/**
 * @param {string} formula
 * @return {string}
 */
 var countOfAtoms = function(formula) {
    let i = 0;
    const n = formula.length;

    const stack = [new Map()];
    while (i < n) {
        const ch = formula[i];

        const parseAtom = () => {
            const sb = [];
            sb.push(formula[i++]);
            while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
                sb.push(formula[i++]);
            }
            return sb.join('');
        }

        const parseNum = () => {
            if (i === n || isNaN(Number(formula[i]))) {
                return 1;
            }
            let num = 0;
            while (i < n && !isNaN(Number(formula[i]))) {
                num = num * 10 + Number(formula[i++]);
            }
            return num;
        }

        if (ch === '(') {
            i++;
            stack.push(new Map());
        } else if (ch === ')') {
            i++;
            const num = parseNum();
            const popMap = stack.pop();
            const topMap = stack[stack.length - 1];
            for (const [atom, v] of popMap.entries()) {
                topMap.set(atom, (topMap.get(atom) || 0) + v * num);
            }
        } else {
            const atom = parseAtom();
            const num = parseNum();
            const topMap = stack[stack.length - 1];
            topMap.set(atom, (topMap.get(atom) || 0) + num);
        }
    }

    let map = stack.pop();
    map = Array.from(map);
    map.sort();
    const res = [];
    for (const [atom, count] of map) {
        res.push(atom);
        if (count > 1) {
            res.push(count);
        }
    }
    return res.join('')

};