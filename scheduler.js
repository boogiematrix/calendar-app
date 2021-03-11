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

const currentDay = $("#currentDay");
const timeBlocks = $(".textarea");

currentDay.text(moment().format("dddd MMMM Do"));
let currentHour = moment().format("HH");

timeBlocks.each(function () {
  if ($(this).attr("data-hour") < currentHour) {
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if ($(this).attr("data-hour") == currentHour) {
    $(this).removeClass("future");
    $(this).addClass("present");
  } else if ($(this).attr("data-hour") > currentHour) {
    $(this).addClass("future");
  }

  $(this).text(localStorage.getItem($(this).attr("data-hour")));
});

/*for (i = 0; i < timeBlocks.length; i++) {
  if (timeBlocks[i].dataset.hour < currentHour) {
    $(timeBlocks[i]).removeClass("present");
    $(timeBlocks[i]).addClass("past");
  } else if (timeBlocks[i].dataset.hour == currentHour) {
    $(timeBlocks[i]).removeClass("future");
    $(timeBlocks[i]).addClass("present");
  } else if (timeBlocks[i].dataset.hour > currentHour) {
    $(timeBlocks[i]).addClass("future");
  }

  timeBlocks[i].textContent = localStorage.getItem(timeBlocks[i].dataset.hour);
}*/

$("button").click(function () {
  let occasion = $(this).prev().val();
  let occasionKey = $(this).prev().attr("data-hour");
  console.log(occasion);
  localStorage.setItem(occasionKey, occasion);
});
