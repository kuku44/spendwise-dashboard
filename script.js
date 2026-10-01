// SpendWise Budget Data

let budget = 50000;
let expenses = 15000;

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to display budget results in the console
function displayResults(budget, expenses) {
    const remainingBalance = calculateBalance(budget, expenses);

    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remainingBalance);
}

// Collect budget information from the user
let userBudget = prompt("Enter your total budget:");

if (userBudget !== null && userBudget !== "") {
    budget = Number(userBudget);
}

// Collect expense information from the user
let userExpenses = prompt("Enter your total expenses:");

if (userExpenses !== null && userExpenses !== "") {
    expenses = Number(userExpenses);
}

// Perform the calculation and display the result
displayResults(budget, expenses);