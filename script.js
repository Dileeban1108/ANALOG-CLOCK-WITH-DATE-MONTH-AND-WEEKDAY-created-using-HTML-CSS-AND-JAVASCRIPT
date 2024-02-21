setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

const currentDate = new Date()

var day = currentDate.getDate();
var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months=['jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];

var currentDayIndex = currentDate.getDay();
var currentMonthIndex = currentDate.getMonth()+1;

var currentDayName = weekdays[currentDayIndex];
var currentMonthName = months[currentMonthIndex];



var formattedDate =  currentDayName  +'-'+day+'-'+ currentMonthName;
const date=document.getElementById("date");
date.innerText=formattedDate;


setClock()