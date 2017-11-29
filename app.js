function calculateUserAge () {
    let userAge = prompt('Please enter your Age.');
    let ageInDays = 0;
    let age = 0;
    if (userAge != null && userAge != 0) {
        ageInDays = userAge * 365.25;
    }
    alert ("You have been alive for roughly, " + ageInDays + " days!.");
}

calculateUserAge();