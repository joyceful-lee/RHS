function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let year = currentYear - birthYear;
    let age = "<b>Age: </b>";
    return age + year.toString();
}

document.getElementById("bessent").innerHTML = calculateAge(1962);
document.getElementById("bondi").innerHTML = calculateAge(1965);
document.getElementById("burgum").innerHTML = calculateAge(1956);