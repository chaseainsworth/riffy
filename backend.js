function boiling(temp, tempUnit, pressure) {
    if (temp === undefined, tempUnit === undefined, pressure === undefined) {
        return "Please input all fields";
    } else if (tempUnit !== "F" && tempUnit !== "C") {
        return "Please input correct unit";
        // } else if (tempUnit === "C") {
        //         let boiling(temp) = temp * 1.8 + 32; 
    } else if (pressure > 14.69) {
        return "Lower the pressure";
    } else if (temp < 100) {
        return "Add heat";
    } else if (temp >= 212 && tempUnit === "F" && pressure <= 14.69) {
        return "Boiling";
    } else if (temp >= 205 && tempUnit === "F" && pressure <= 12.28) {
        return "Boiling";
    } else if (temp >= 194 && tempUnit === "F" && pressure <= 10.16) {
        return "Boiling";
    } else if (temp >= 176 && tempUnit === "F" && pressure <= 6.866) {
        return "Boiling";  
    } else if (temp >= 158 && tempUnit === "F" && pressure <= 4.52) {
        return "Boiling";
    } else if (temp >= 140 && tempUnit === "F" && pressure <= 2.88) {
        return "Boiling";
    } else if (temp >= 122 && tempUnit === "F" && pressure <= 1.79) {
        return "Boiling";
    } else if (temp = 100 && tempUnit === "F" && pressure <= 1.00) {
        return "Boiling";
    } else {
        return "Not Boiling";
    }
}

module.exports = boiling;

