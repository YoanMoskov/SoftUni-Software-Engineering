function solve(name, age, weight, height){
    let result = {
        name,
        personalInfo: { 
        age, 
        weight,
        height,
        },
        BMI: valueBMI(weight, height),
    }
    function valueBMI(weight, height) {
        height = height / 100;
        let status = Math.round((weight/Math.pow(height, 2)));
        return status;
    }
    if (result.BMI < 18.5) {
        result.status = 'underweight';
    }
    else if (result.BMI < 25) {
        result.status = 'normal';
    }
    else if (result.BMI < 30) {
        result.status = 'overweight';
    }
    else if (result.BMI >= 30) {
        result.status = 'obese';
        result.recommendation = 'admission required';
    }
    return result;
}
solve('Honey Boo Boo', 9, 57, 137);
