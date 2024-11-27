export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negativeNumbers = numArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}