/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

const currentDay = document.getElementById('currentDay')
const timeBlocks = document.getElementsByClassName('textarea')
//const hour = document.getElementsByClassName('hour')

currentDay.textContent = moment().format('dddd MMMM Do')
let currentHour = moment().format('HH')


for (i=0; i < timeBlocks.length; i++){
    if (timeBlocks[i].dataset.hour < currentHour) {
        timeBlocks[i].classList.remove('present')
        timeBlocks[i].classList.add('past')
    } else if(timeBlocks[i].dataset.hour == Math.floor(currentHour)) {
        timeBlocks[i].classList.remove('future')
        timeBlocks[i].classList.add('present')
    } else if(timeBlocks[i].dataset.hour > currentHour) {
        timeBlocks[i].classList.add('future')
    }
}