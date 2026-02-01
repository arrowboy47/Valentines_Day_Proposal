function nextPage() {
    window.location.href = "yes.html";
}
function surveyPage() {
    window.location.href = "When.html";
}

function saveTime(choice) {
  localStorage.setItem("time", choice);
  window.location.href = "event.html";
}

let selectedEvents = [];

function toggleEvent(button, eventName) {
  if (selectedEvents.includes(eventName)) {
    selectedEvents = selectedEvents.filter(e => e !== eventName);
    button.style.backgroundColor = "#ED5757";
    button.style.color = "white";
  } else {
    selectedEvents.push(eventName);
    button.style.backgroundColor = "#FAF9F6";
    button.style.color = "#ED5757";
  }
}

function saveEvents() {
  localStorage.setItem("events", JSON.stringify(selectedEvents));
  window.location.href = "location.html";
}

function saveLocation(choice) {
  localStorage.setItem("location", choice);
  window.location.href = "drink.html";
}


function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
