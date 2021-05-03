function isEligible() {
  let fullName = document.getElementById("fullName").value;
  let age = Number(document.getElementById("age").value);

  // comparison: ===
  // OR Operator: ||
  if (age === 15 || age > 15) {
    console.log("Eligible by Age");
  } else {
    console.log("Not Eligible by Age");
  }

  // comparison: ===
  // AND Operator: &&
  if(age === 15 || age > 15 && fullName === "ABC") {
    console.log("Eligible")
  } else {
    console.log("Not Eligible")
  }
}
