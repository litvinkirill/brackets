module.exports = function check(str, bracketsConfig) {
    while (true) {
        let bracket = 0;
        bracketsConfig.forEach(item => {
            if (str.includes(item[0] + item[1])) {
                str = str.replace(item[0] + item[1], '')
                bracket++;
            }
        })
        if (bracket === 0) {
            break;
        }
    }
    if (str === '') {
        return true;
    } else {
        return false;
    }
}
