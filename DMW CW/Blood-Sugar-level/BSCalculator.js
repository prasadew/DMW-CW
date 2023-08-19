function calculateBloodSugar() {
    var testType = document.getElementById("ttype").value;
    var unitType = document.querySelector('input[name="unit"]:checked').value;
    var value = parseInt(document.getElementsByName("value")[0].value);
    var resultTextbox = document.getElementById("resultTextbox");
  
    // Check if all required fields are filled
    if (testType === "Select" || unitType === "" || isNaN(value)) {
      resultTextbox.value = "Please fill in all the required fields.";
      return;
    }
  
    // Convert blood sugar value to mg/dL if unit is mmol/L
    if (unitType === "mmol / L") {
      value = Math.round(value * 18);
    }
  
    // Check the blood sugar level based on the test type
    var result = "";
    if (testType === "Fasting Blood Glucose") {
      if (value >= 70 && value <= 100) {
        result = "Your fasting blood sugar level is within the normal range.";
      } else {
        result = "Your fasting blood sugar level is not within the normal range. Please consult a doctor.";
      }
    } else if (testType === "Random Blood Glucose") {
      if (value <= 140) {
        result = "Your random blood sugar level is within the normal range.";
      } else {
        result = "Your random blood sugar level is not within the normal range. Please consult a doctor.";
      }
    }
  
    // Display the result in the textbox
    resultTextbox.value = result;
    return result;
  }