// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const theBMI = weight / (height **2);
    if (theBMI <= 18.5) return "Underweight"
    if (theBMI <= 25.0) return "Normal"
    if (theBMI <= 30.0) return "Overweight"
    return "Obese";
    }