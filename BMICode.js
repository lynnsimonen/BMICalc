$(document).ready(function () {
    $("button").on("click", calculate);
    // hide output until it is output time then it will .show()
    $("p#final").hide();
});

function calculate() {
    //gather input and parse to convert to numbers
    let height = parseFloat($("input#height").val());

    let weight = parseFloat($("input#weight").val());

    //convert to metric and calculate BMI
    let bmi = (weight * 0.4535)/(Math.pow((height * 0.0254),2)).toFixed(1);

    //based on bmi, determine body type with if-else statements
    if (bmi < 18.5) {
        $("span#bmi").text(bmi.toFixed(1));
        $("p#output").text('This BMI suggests an underweight body type.');
        $("p#final").show();
    }
    else if (bmi>=18.5 && bmi<25) {
        $("span#bmi").text(bmi.toFixed(1));
        $("p#output").text('This BMI suggests a normal body type.');
        $("p#final").show();
    }
    else if (bmi>=25 && bmi<30) {
        $("span#bmi").text(bmi.toFixed(1));
        $("p#output").text('This BMI suggests a severly overweight body type.');
        $("p#final").show();
    }
    else if (bmi >= 30 && bmi <= 53) {
        $("span#bmi").text(bmi.toFixed(1));
        $("p#output").text('This BMI suggests an obese body type.');
        $("p#final").show();
    }
    else {
        $("p#output").text('Error.  Please fill in data above within the required ranges.');
        $("p#final").hide();
    }
}

