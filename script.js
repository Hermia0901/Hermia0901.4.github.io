document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get the input values
    const x = parseFloat(document.getElementById('average-age').value);
    const x2 = parseFloat(document.getElementById('education').value);
    const x3 = parseFloat(document.getElementById('income').value);

    // Validate inputs
    if (isNaN(x) || isNaN(x2) || isNaN(x3)) {
        alert("Please enter valid numbers for all inputs.");
        return;
    }

    // Calculate results
    const numberOfUnits = x + x2 + x3; // formula
    const rentOfUnits = x * x2 * x3;

    // Select result elements
    const numUnitsElem = document.getElementById('number-of-units');
    const rentUnitsElem = document.getElementById('rent-of-units');

    // Reset animation by removing and re-adding the class
    numUnitsElem.style.animation = "none";
    rentUnitsElem.style.animation = "none";
    void numUnitsElem.offsetWidth; // Trigger reflow
    void rentUnitsElem.offsetWidth; // Trigger reflow

    numUnitsElem.style.animation = "";
    rentUnitsElem.style.animation = "";

    // Display results with numbers wrapped in span tags
    numUnitsElem.innerHTML = `Number of Units: <span>${numberOfUnits}</span>`;
    rentUnitsElem.innerHTML = `Rents of 2 Bedroom Units: <span>${rentOfUnits}</span>`;
});
