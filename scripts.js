// number ის რამდენი პროცენტია numprocent
const calculatorprocent = (number, numbprocent) => {
  return (numbprocent / number) * 100;
};
console.log(calculatorprocent(35, 26));
// ----------------------------------------- | ----------------------------------------- -----------------------------------------
// რამდენია number1 ის numbprocent1%
const calculatorprocent1 = (number1, numbprocent1) => {
  return (number1 * numbprocent1) / 100;
};
console.log(calculatorprocent1(35, 26));
// ----------------------------------------- | ----------------------------------------- -----------------------------------------

// რამდენი პროცენტით იზრდება/მცირდება  num  იდან num1 ამდე
const calculatorprocent2 = (num, num1) => {
  return ((num1 - num) / num) * 100;
};
console.log(calculatorprocent2(1, 200));
// ----------------------------------------- | ----------------------------------------- -----------------------------------------
// რა რიცხვის numberprocnet2 %-ია number2
const calculatorprocent3 = (numbprocent2, number2) => {
  return (number2 / numbprocent2) * 100;
};
console.log(calculatorprocent3(1, 100));
