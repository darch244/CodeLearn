function unlockLesson() {
  const inputCode = document.getElementById("accessCode").value;
  const usedCodes = JSON.parse(localStorage.getItem("usedCodes") || "[]");

  // Simulated list of valid one-time codes
  const validCodes = ["A1B2C3", "X9Y8Z7", "M5N4O3"];

  if (usedCodes.includes(inputCode)) {
    alert("This code has already been used.");
  } else if (validCodes.includes(inputCode)) {
    document.getElementById("paidLesson").style.display = "block";
    usedCodes.push(inputCode);
    localStorage.setItem("usedCodes", JSON.stringify(usedCodes));
  } else {
    alert("Invalid code.");
  }
}