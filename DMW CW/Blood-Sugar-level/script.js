function checkBloodSugar() {
  // Get input values
  var fastingLevel = document.getElementById("fasting").value;
  var postprandialLevel = document.getElementById("postprandial").value;

  // Perform the blood sugar check
  var result = "";
  if (fastingLevel >= 70 && fastingLevel <= 100 && postprandialLevel <= 140) {
    result = "Your blood sugar levels are normal.";
  } else {
    result = "Your blood sugar levels are outside the normal range.";
  }

  // Display the result
  document.getElementById("result").innerHTML = result;
}
