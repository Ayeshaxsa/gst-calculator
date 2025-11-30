/**
 * GST Calculator - Main JavaScript File
 * Handles calculation, validation, and UI updates
 */

/**
 * Calculates GST based on user input
 * Validates input and displays results
 */
function calculateGST() {
    // Get input values
    const amountInput = document.getElementById("amount");
    const rateInput = document.getElementById("rate");
    
    const amount = parseFloat(amountInput.value);
    const rate = parseFloat(rateInput.value);

    // Validate amount
    if (!amountInput.value || isNaN(amount) || amount < 0) {
        showError("Please enter a valid amount greater than or equal to 0");
        amountInput.focus();
        return;
    }

    // Calculate GST and total
    const gstAmount = (amount * rate) / 100;
    const totalAmount = amount + gstAmount;

    // Update display with results
    updateResults(amount, gstAmount, totalAmount);
    
    // Show results section with animation
    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";
    resultsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/**
 * Updates the results display with calculated values
 * @param {number} base - Base amount before GST
 * @param {number} gst - Calculated GST amount
 * @param {number} total - Total amount including GST
 */
function updateResults(base, gst, total) {
    document.getElementById("base").textContent = formatCurrency(base);
    document.getElementById("gst").textContent = formatCurrency(gst);
    document.getElementById("total").textContent = formatCurrency(total);
}

/**
 * Formats a number as currency with 2 decimal places
 * @param {number} value - Number to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(value) {
    return value.toFixed(2);
}

/**
 * Resets the calculator to initial state
 */
function resetCalculator() {
    // Reset form
    document.getElementById("gst-form").reset();
    
    // Reset results to zero
    updateResults(0, 0, 0);
    
    // Focus on amount input
    document.getElementById("amount").focus();
}

/**
 * Shows an error message to the user
 * @param {string} message - Error message to display
 */
function showError(message) {
    alert(message);
}

/**
 * Initialize calculator on page load
 */
document.addEventListener("DOMContentLoaded", function() {
    // Focus on amount input when page loads
    document.getElementById("amount").focus();
    
    // Add Enter key support for amount input
    document.getElementById("amount").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            calculateGST();
        }
    });
    
    // Real-time calculation on input change (optional)
    const enableRealTimeCalc = false; // Set to true for auto-calculation
    
    if (enableRealTimeCalc) {
        document.getElementById("amount").addEventListener("input", calculateGST);
        document.getElementById("rate").addEventListener("change", calculateGST);
    }
});
