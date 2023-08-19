document.getElementById("BloodPressure").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var age = parseInt(document.getElementById("age").getElementsByTagName("input")[0].value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var systolic = parseInt(document.getElementById("systolicinput").value);
    var diastolic = parseInt(document.getElementById("diastolicinput").value);
  
    const bloodPressureRange = calculateBloodPressure(age, gender, systolic, diastolic);
    document.getElementById("resultTextbox").value = 'Blood Pressure Range: ' + bloodPressureRange;
  });
  
  function calculateBloodPressure(age, gender, systolic, diastolic) {
    let bloodPressureRange = "";
  
    if (age >= 18) {
      if (gender.toLowerCase() === "male") {
        if (systolic < 120 && diastolic < 80) {
          bloodPressureRange = "Normal";
        } else if ((systolic >= 120 && systolic <= 129) && diastolic < 80) {
          bloodPressureRange = "Elevated";
        } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
          bloodPressureRange = "High blood pressure stage 1";
        } else if ((systolic >= 140 && systolic <= 180) || (diastolic >= 90 && diastolic <= 120)) {
          bloodPressureRange = "High blood pressure stage 2";
        } else if (systolic > 180 || diastolic > 120) {
          bloodPressureRange = "Hypertensive crisis";
        }
      } else if (gender.toLowerCase() === "female") {
        if (systolic < 120 && diastolic < 80) {
          bloodPressureRange = "Normal";
        } else if ((systolic >= 120 && systolic <= 129) && diastolic < 80) {
          bloodPressureRange = "Elevated";
        } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
          bloodPressureRange = "High blood pressure stage 1";
        } else if ((systolic >= 140 && systolic <= 180) || (diastolic >= 90 && diastolic <= 120)) {
          bloodPressureRange = "High blood pressure stage 2";
        } else if (systolic > 180 || diastolic > 120) {
          bloodPressureRange = "Hypertensive crisis";
        }
      }
    } else {
      bloodPressureRange = "Blood pressure calculation is only available for adults (age 18 and above).";
    }
  
    return bloodPressureRange;
  }

