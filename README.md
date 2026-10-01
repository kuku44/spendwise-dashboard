# SpendWise Dashboard

## Project Description

SpendWise is a simple budgeting and expense-tracking web application. The project helps users understand their monthly budget, record different types of expenses, calculate their total spending, and determine their remaining balance.

The project uses HTML for the structure, CSS for the visual design, and JavaScript to process budgeting and expense data.

## JavaScript Concepts Implemented

The SpendWise project demonstrates several JavaScript concepts covered in this assignment:

* Variables
* Data types
* User input
* Type conversion
* Arithmetic calculations
* Functions
* Function calls
* Console output

## Variables

Variables are used to store important budgeting and expense information.

For example:

```javascript
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
```

Additional variables store expenses for different categories:

```javascript
let food = 0;
let transport = 0;
let rent = 0;
let entertainment = 0;
let savings = 0;
let utilities = 0;
```

These variables allow the application to store and process the user's financial information.

## User Input

SpendWise collects information from the user using JavaScript's `prompt()` function.

For example:

```javascript
let budgetInput = prompt("Enter your monthly budget:");
```

The user's input is initially received as text. The `Number()` function is then used to convert the input into a number:

```javascript
budget = Number(budgetInput);
```

The same method is used to collect the different expense amounts.

## Budget Calculations

SpendWise calculates the total expenses by adding all expense categories together.

```javascript
totalExpenses =
    food +
    transport +
    rent +
    entertainment +
    savings +
    utilities;
```

The application then calculates the remaining balance by subtracting total expenses from the monthly budget:

```javascript
remainingBalance = budget - totalExpenses;
```

This allows the user to see how much money remains after the recorded expenses.

## Functions

Functions are used to organize the JavaScript code and make the calculations reusable.

The `calculateTotalExpenses()` function calculates the user's total expenses:

```javascript
function calculateTotalExpenses() {
    totalExpenses =
        food +
        transport +
        rent +
        entertainment +
        savings +
        utilities;

    return totalExpenses;
}
```

The `calculateRemainingBalance()` function calculates the amount remaining after expenses:

```javascript
function calculateRemainingBalance() {
    remainingBalance = budget - calculateTotalExpenses();

    return remainingBalance;
}
```

Using functions makes the program easier to understand, maintain, and modify.

## Displaying Results

The calculated information is displayed in the browser's developer console using `console.log()`.

The console displays:

* Monthly budget
* Food expenses
* Transport expenses
* Rent expenses
* Entertainment expenses
* Savings
* Utilities
* Total expenses
* Remaining balance

Example:

```javascript
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBalance);
```

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Follow the prompts to enter the monthly budget and expenses.
5. Open the browser Developer Tools.
6. Select the **Console** tab.
7. View the SpendWise budget calculations.

## Project Files

```text
spendwise-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

The JavaScript foundation transforms SpendWise from a visual dashboard into an application that can collect user information, store data in variables, perform calculations, use reusable functions, and display budget results in the browser console.
