const result = document.getElementById("results-div");
const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

const correct = () => {
  const newResult = document.createElement("div");
  newResult.textContent = `Valid US number: ${input.value}`;
  newResult.style.color = "green";
  result.appendChild(newResult);
  console.log("true");
};
const incorrect = () => {
  const newResult = document.createElement("div");
  newResult.textContent = `Invalid US number: ${input.value}`;
  newResult.style.color = "red";
  result.appendChild(newResult);
  console.log("false");
};

const teto = () => {
  input.value
    ? phoneRegex.test(input.value)
      ? correct()
      : incorrect()
    : alert("Please provide a phone number");
};

check.addEventListener("click", teto);
clear.addEventListener("click", () => (result.innerHTML = ""));
