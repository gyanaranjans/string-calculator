# String Calculator

This project is a simple string calculator implemented in TypeScript. It supports various delimiters, handles negative numbers, and ignores non-numeric values.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/gyanaranjans/string-calculator.git
   cd string-calculator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

To run the tests, use the following command:

```sh
npm test
```

This will run the tests using Jest and ts-jest.

## Usage

You can use the `add` function from the `stringCalculator.ts` file to perform string calculations. Here is an example:

```ts
import { add } from "./stringCalculator";

console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
```

## Project Structure

- `stringCalculator.ts`: Contains the implementation of the string calculator.
- `stringCalculator.test.ts`: Contains the test cases for the string calculator.
- `tsconfig.json`: TypeScript configuration file.
- `jest.config.js`: Jest configuration file.
- `package.json`: Project configuration and dependencies.
