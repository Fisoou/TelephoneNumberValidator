const result = document.getElementById("result");
const input = document.getElementById("number-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

const test = () => {
  console.log(input.value);
};

check.addEventListener("click", test);
