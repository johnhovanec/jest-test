function testSum (a, b) {
    const sum = a + b
    return sum;
}

function testDifference (a, b) {
    const diff = a - b
    return diff;
}

function createUser (fname, lname, age) {
    let user = {
        fname: fname,
        lname: lname,
        age: age,
    }
    return user;
}

const utils = {
    testSum,
    testDifference,
    createUser,
}

export default utils;