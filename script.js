// -----------------------------
// SpendWise Interactive
// -----------------------------

// Monthly budget
let budget = 0;

// Array for storing multiple expense records
let expenses = [];


// -----------------------------
// Select HTML Elements
// -----------------------------

const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const countDisplay = document.getElementById("countDisplay");

const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");
const clearButton = document.getElementById("clearButton");


// -----------------------------
// Format Money
// -----------------------------

function formatMoney(amount) {
    return `KSh ${amount.toFixed(2)}`;
}


// -----------------------------
// Calculate Total Expenses
// -----------------------------

function calculateTotalExpenses() {

    let total = 0;

    // LOOP through the expenses array
    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;
    }

    return total;
}


// -----------------------------
// Conditional Budget Feedback
// -----------------------------

function showBudgetFeedback(total, balance) {

    // CONDITIONAL STATEMENT

    if (budget === 0) {

        message.textContent =
            "Please set your monthly budget.";

        message.className = "warning";

    } else if (total > budget) {

        message.textContent =
            "Warning: You have exceeded your budget.";

        message.className = "danger";

    } else if (balance <= budget * 0.2) {

        message.textContent =
            "Your remaining balance is getting low.";

        message.className = "warning";

    } else {

        message.textContent =
            "Good job! You are within your budget.";

        message.className = "success";
    }
}


// -----------------------------
// Update Dashboard
// -----------------------------

function updateDashboard() {

    const total = calculateTotalExpenses();

    const balance = budget - total;

    // DOM MANIPULATION
    budgetDisplay.textContent = formatMoney(budget);

    expenseDisplay.textContent = formatMoney(total);

    balanceDisplay.textContent = formatMoney(balance);

    countDisplay.textContent = expenses.length;


    // Clear existing records
    expenseList.innerHTML = "";


    // CONDITIONAL
    if (expenses.length === 0) {

        expenseList.innerHTML =
            "<p>No expenses added yet.</p>";

    } else {

        // LOOP through expense records

        for (let i = 0; i < expenses.length; i++) {

            const expense = expenses[i];

            const item = document.createElement("div");

            item.className = "expense-item";

            item.innerHTML = `
                <div>
                    <h3>${expense.description}</h3>
                    <p>${expense.category}</p>
                </div>

                <span class="expense-amount">
                    ${formatMoney(expense.amount)}
                </span>
            `;

            expenseList.appendChild(item);
        }
    }

    showBudgetFeedback(total, balance);
}


// -----------------------------
// Budget Form Event
// -----------------------------

budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newBudget = Number(budgetInput.value);


    // CONDITIONAL VALIDATION

    if (newBudget <= 0 || Number.isNaN(newBudget)) {

        message.textContent =
            "Please enter a valid budget greater than zero.";

        message.className = "danger";

        return;
    }


    budget = newBudget;

    budgetInput.value = "";

    updateDashboard();
});


// -----------------------------
// Expense Form Event
// -----------------------------

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const description =
        descriptionInput.value.trim();

    const category =
        categoryInput.value;

    const amount =
        Number(amountInput.value);


    // CONDITIONAL VALIDATION

    if (
        description === "" ||
        category === "" ||
        amount <= 0 ||
        Number.isNaN(amount)
    ) {

        message.textContent =
            "Please enter valid expense information.";

        message.className = "danger";

        return;
    }


    // ADD RECORD TO ARRAY

    expenses.push({

        description: description,

        category: category,

        amount: amount

    });


    // Clear form
    expenseForm.reset();


    // Update webpage
    updateDashboard();
});


// -----------------------------
// Clear Expenses Event
// -----------------------------

clearButton.addEventListener("click", function() {

    // CONDITIONAL

    if (expenses.length === 0) {

        message.textContent =
            "There are no expenses to clear.";

        message.className = "warning";

        return;
    }


    expenses = [];

    updateDashboard();
});


// -----------------------------
// Initial Dashboard
// -----------------------------

updateDashboard();