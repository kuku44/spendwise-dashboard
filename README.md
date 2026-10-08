# SpendWise Interactive

SpendWise is an interactive budgeting application built using HTML, CSS, and JavaScript.

The purpose of this week's project is to demonstrate JavaScript decision making, arrays, loops, DOM manipulation, and event handling.

## Improvements Made This Week

The following improvements were made to SpendWise:

- Added an interactive monthly budget form.
- Added an expense form.
- Added expense categories.
- Added an array to store multiple expense records.
- Added loops to process expense records.
- Added conditional statements for budget decisions.
- Added dynamic DOM updates.
- Added event listeners for user interactions.
- Added budget warning and success messages.
- Added a Clear All button.
- Added responsive design for smaller screens.

## 1. Decision Making

SpendWise uses `if`, `else if`, and `else` statements to evaluate different budgeting situations.

For example, the application checks whether:

- The user has entered a valid budget.
- An expense amount is valid.
- The total expenses exceed the budget.
- The remaining balance is getting low.
- There are no expense records.

Example:

```javascript
if (total > budget) {
    message.textContent = "Warning: You have exceeded your budget.";
} else {
    message.textContent = "Good job! You are within your budget.";
}