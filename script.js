// ------------------------
// Part 2: JavaScript Functions
// ------------------------

// Example of parameters, return values, and scope
function calculateTotal(a, b) {
  const total = a + b;
  return total;
}

function runCalculation() {
  const x = 7;
  const y = 13;
  const result = calculateTotal(x, y);

  // Output to the DOM
  document.getElementById("calc-output").textContent =
    `The result of ${x} + ${y} is ${result}`;
}

// ------------------------
// Part 3: Combine CSS + JS
// ------------------------

document.getElementById("animateTrigger").addEventListener("click", function () {
  const box = document.getElementById("triggerBox");

  // Toggle animation class
  box.classList.toggle("active");

  // Optional: reset animation after a few seconds
  setTimeout(() => {
    box.classList.remove("active");
  }, 2000);
});
