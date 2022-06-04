/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    for (let i = 0; i < emails.length; i++) {
        const emailArray = [...emails[i]];
        while (emailArray.indexOf('.') !== -1 && emailArray.indexOf('.') < emailArray.indexOf('@')) {
            emailArray.splice(emailArray.indexOf('.'), 1);
        }
        if (emailArray.indexOf('+') !== -1 && emailArray.indexOf('+') < emailArray.indexOf('@')) {
            emailArray.splice(emailArray.indexOf('+'), emailArray.indexOf('@') - emailArray.indexOf('+'));
        }
        emails[i] = emailArray.join('');
    }
    const set = new Set(emails);
    return set.size;
};


var numUniqueEmails = function(emails) {
    const emailSet = new Set();
    for (const email of emails) {
        const i = email.indexOf('@');
        let local = email.slice(0, i).split("+")[0]; // 去掉本地名第一个加号之后的部分
        local = local.replaceAll(".", ""); // 去掉本地名中所有的句点
        emailSet.add(local + email.slice(i));
    }
    return emailSet.size;
};