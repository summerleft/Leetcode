/**
 * @param {string} queryIP
 * @return {string}
 */
 var validIPAddress = function(queryIP) {
    if (queryIP.split('.').length === 4) {
        const tempArr = queryIP.split('.');
        for (let i = 0; i < tempArr.length; i++) {
            const cur = tempArr[i];
            const curArr = cur.split('');
            if (curArr[0] === '0' && curArr.length > 1) {
                return 'Neither';
            }
            if (!curArr.every(item => item >=0 && item <= 9)) {
                return 'Neither';
            }
            if (!(parseInt(cur) < 256 && parseInt(cur) >= 0)) {
                return 'Neither';
            }
        }
        return 'IPv4';
    } else if (queryIP.split(':').length === 8) {
        const tempArr = queryIP.split(':');
        for (let i = 0; i < tempArr.length; i++) {
            const cur = tempArr[i].split('');
            if (cur.length < 1 || cur.length > 4) {
                return 'Neither';
            }
            for (let i = 0; i < cur.length; i++) {
                const curChar = cur[i];
                if ((curChar >= 0 && curChar <= 9) || (curChar >= 'a' && curChar <= 'f') || (curChar >= 'A' && curChar <= 'F')) {
                    continue;
                } else {
                    return 'Neither';
                }
            }
        }
        return 'IPv6';
    } else {
        return 'Neither';
    }
};