function isEligible() {
  let fullName = document.getElementById("fullName").value;
  // let age = Number(document.getElementById("age").value);
  let age = +document.getElementById("age").value;

  let nameError = document.getElementById("name-error")
  let ageError = document.getElementById("age-error")

  // comparison: ===
  // OR Operator: ||
  // if (age === 15 || age > 15) {
  //   console.log("Eligible by Age");
  // } else {
  //   console.log("Not Eligible by Age");
  // }

  // // comparison: ===
  // // AND Operator: &&
  // if(age === 15 || age > 15 && fullName === "ABC") {
  //   console.log("Eligible")
  // } else {
  //   console.log("Not Eligible")
  // }
  if(!fullName) {
    nameError.innerHTML = "Name is required"
  } else {
    nameError.innerHTML = ""
  }

  if(!age) {
    ageError.innerHTML = "Age is required"
  } else {
    ageError.innerHTML = ""
  }

  // comparison: === ! = =
  // NOT Operator: !
  if(fullName !== "ABC") {
    console.log("Eligible")

  }
  
}
