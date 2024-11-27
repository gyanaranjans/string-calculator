export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        let customDelimiter = numbers.substring(2, delimiterEndIndex);
        if (customDelimiter.startsWith("[")) {
            customDelimiter = customDelimiter.slice(1, -1).split("][").map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|");
        } else {
            customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        delimiter = new RegExp(customDelimiter);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    const negativeNumbers = numArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}