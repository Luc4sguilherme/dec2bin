function dec2Bin(input) {
  const regex = new RegExp(/^[0-9]+$/, "g");

  if (input.length === 0) {
    return;
  }

  if (input.length > 10) {
    throw new Error("The input must have a size less than or equal to 20!");
  }

  if (!regex.test(input)) {
    throw new Error("The entry must contain only numbers!");
  }

  let binary = "";
  let remainder = parseInt(input % 2);
  let next = parseInt(input / 2);

  if (next > 0) {
    binary += dec2Bin(next);
  }

  binary += String(remainder);

  return binary;
}

function errorHandler(error) {
  const errorMessage = document.querySelector(".errorMessage");
  const p = document.querySelector(".display>p");

  errorMessage.innerText = error.message;
  p.innerText = "🤷 Waiting for a valid number...";
  p.className = "info";
}

function clearError() {
  const errorMessage = document.querySelector(".errorMessage");
  errorMessage.innerText = "";
}

function insertBinary(binary) {
  const p = document.querySelector(".display>p");

  p.className = "binary";

  if (binary) {
    p.innerText = binary;
  } else {
    p.innerText = "";
  }
}

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  try {
    const decimal = event.target.value;
    const binary = dec2Bin(decimal);

    clearError();
    insertBinary(binary);
  } catch (error) {
    errorHandler(error);
  }
});
