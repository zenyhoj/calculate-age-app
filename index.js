// create an event listener
const btn = document.getElementById("btn");
const birthdate = document.getElementById("birthdate");
const result = document.getElementById("result");

function calculateAge() {
  //get the input value
  const birthdateValue = birthdate.value;
  if (birthdateValue == "") {
    alert("Please enter your birthdate");
  } else {
    const age = getAge(birthdateValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

btn.addEventListener("click", calculateAge);

function getAge(birthdateValue) {
  const currentDate = new Date();
  const birthdayVal = new Date(birthdateValue);

  let age = currentDate.getFullYear() - birthdayVal.getFullYear();

  let month = currentDate.getMonth() - birthdayVal.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDay() - birthdayVal.getDay())
  ) {
    age--;
  }
  return age;
}
