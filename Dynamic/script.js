//DOM ELEMENTS
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Optional
  const showAmPm = true;

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format: so we won't have 13,14,14,16.....Instead of 13,14,15....it'll go back to 1,2,3....
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
// set backgroud and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('./surfer.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('./partners.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "black";
    document.body.style.opacity = 10;
  } else {
    // Evening
    document.body.style.backgroundImage = "url('./goodnight.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = ["Dearie"];
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName() {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = ["Enter Focus"];
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus() {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
// setName();
// setFocus();
