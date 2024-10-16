function add(inputString) {
    let delimiter = /[\n,]+/;
    if (inputString.startsWith("//")) {
        const delimiterEndIndex = inputString.indexOf('\n');
        delimiter = new RegExp(`[${inputString[2]}]+`);
        inputString = inputString.slice(delimiterEndIndex + 1);
    }
    const numberArray = inputString.split(delimiter);
    const isNegativeNumber = numberArray.filter(num => parseInt(num) < 0);
    if (isNegativeNumber.length > 0) {
        console.error(`negative numbers not allowed ${negatives.join(',')}`);
        return;
    }
    const sum = numberArray.reduce((sum, num) => sum + parseInt(num), 0);
    
    console.log(sum);
}