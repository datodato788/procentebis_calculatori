// // რამდენია number1 ის numbprocent1%
// // const calculatorprocent1 = (number1, numbprocent1) => {
// //   return (number1 * numbprocent1) / 100;
// // };
// // console.log(calculatorprocent1(35, 26));
// // ----------------------------------------- | ----------------------------------------- -----------------------------------------
// // number ის რამდენი პროცენტია numprocent
// const calculatorprocent = (number, numbprocent) => {
//   return (numbprocent / number) * 100;
// };
// console.log(calculatorprocent(35, 26));
// // ----------------------------------------- | ----------------------------------------- -----------------------------------------

// // რამდენი პროცენტით იზრდება/მცირდება  num  იდან num1 ამდე
// const calculatorprocent2 = (num, num1) => {
//   return ((num1 - num) / num) * 100;
// };
// console.log(calculatorprocent2(1, 200));
// // ----------------------------------------- | ----------------------------------------- -----------------------------------------
// // რა რიცხვის numberprocnet2 %-ია number2
// const calculatorprocent3 = (numbprocent2, number2) => {
//   return (number2 / numbprocent2) * 100;
// };
// console.log(calculatorprocent3(1, 100));
// // ----------------------------------
///////////////////////////////////////////////////////
function calc1() {
  const num1 = document.getElementById("num1");
  const numm1 = document.getElementById("numm1");
  const calced1 = document.getElementById("calced1");

  const num1Value = Number(num1.value);
  const numm1Value = Number(numm1.value);

  calced1.innerHTML = (num1Value * numm1Value) / 100;
}
///////////////////////////////////////////////////////
function calc2() {
  const num2 = document.getElementById("num2");
  const numm2 = document.getElementById("numm2");
  const calced2 = document.getElementById("calced2");

  const num2Value = Number(num2.value);
  const numm2Value = Number(numm2.value);

  calced2.innerHTML = ((numm2Value / num2Value) * 100) + "%"
}
///////////////////////////////////////////////////////
function calc3() {
  const num3 = document.getElementById("num3");
  const numm3 = document.getElementById("numm3");
  const calced3 = document.getElementById("calced3");

  const num3Value = Number(num3.value);
  const numm3Value = Number(numm3.value);

  calced3.innerHTML = (((numm3Value - num3Value) / num3Value) * 100)+ "%"
}
///////////////////////////////////////////////////////
function calc4() {
  const num4 = document.getElementById("num4");
  const numm4 = document.getElementById("numm4");
  const calced4 = document.getElementById("calced4");

  const num4Value = Number(num4.value);
  const numm4Value = Number(numm4.value);

  calced4.innerHTML = (numm4Value / num4Value) * 100;
}
