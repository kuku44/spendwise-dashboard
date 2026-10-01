// SpendWise JavaScript Foundation

// Application variables
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense variables
let food = 0;
let transport = 0;
let rent = 0;
let entertainment = 0;
let savings = 0;
let utilities = 0;


// Function to calculate total expenses
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


// Function to calculate remaining balance
function calculateRemainingBalance() {
    remainingBalance = budget - calculateTotalExpenses();

    return remainingBalance;
}


// Collect budget from the user
let budgetInput = prompt("Enter your monthly budget:");

// Convert the input from text to a number
budget = Number(budgetInput);


// Collect expenses from the user
food = Number(prompt("Enter your food expenses:"));

transport = Number(prompt("Enter your transport expenses:"));

rent = Number(prompt("Enter your rent expenses:"));

entertainment = Number(prompt("Enter your entertainment expenses:"));

savings = Number(prompt("Enter your savings:"));

utilities = Number(prompt("Enter your utilities expenses:"));


// Perform calculations
calculateTotalExpenses();
calculateRemainingBalance();


// Display results in the browser console
console.log("===== SpendWise Budget Report =====");
console.log("Monthly Budget: $" + budget);
console.log("Food Expenses: $" + food);
console.log("Transport Expenses: $" + transport);
console.log("Rent Expenses: $" + rent);
console.log("Entertainment Expenses: $" + entertainment);
console.log("Savings: $" + savings);
console.log("Utilities: $" + utilities);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBalance);