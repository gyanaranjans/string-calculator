export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;


    ({ numbers, delimiter } = extractAndReplaceDelimiter(numbers, delemitorReplace, delimiter));

    const numArray = numbers.split(delimiter).map(num => {
        const parsedNum = Number(num);
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    NegativeNumberCheck(numArray);

    return numArray.reduce((sum, num) => sum + num, 0);
}


function extractAndReplaceDelimiter(numbers: string, delemitorReplace: (delimiter: string) => string, delimiter: RegExp) {
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        let customDelimiter = numbers.substring(2, delimiterEndIndex);
        if (customDelimiter.startsWith("[")) {
            customDelimiter = customDelimiter.slice(1, -1).split("][").map(d => delemitorReplace(d)).join("|");
        } else {
            customDelimiter = delemitorReplace(customDelimiter);
        }
        delimiter = new RegExp(customDelimiter);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }
    return { numbers, delimiter };
}

function NegativeNumberCheck(numArray: number[]) {
    const negativeNumbers = numArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
}
const delemitorReplace = (delimiter: string) => {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

