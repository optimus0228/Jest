function add(a, b) {
    return a + b;
}

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
}

function myBeverages() {
    return [
        { delicious: true, sour: false },
        { delicious: true, sour: true }
    ]
}

module.exports = {
    add,
    compileAndroidCode,
    myBeverages
}