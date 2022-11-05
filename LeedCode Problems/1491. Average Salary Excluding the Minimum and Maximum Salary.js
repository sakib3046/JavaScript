
var average = function (salary) {

    var salary = [4000, 3000, 1000, 2000];
    var average = 0;
    salary.sort(function (a, b) { return b - a });
    for (let i = 0; i < salary.length - 1; i++) {
        average = average + salary[i];
    }
    average = average - salary[0];
    average = average / (salary.length - 2);
    return average;

};

console.log(average());