const currentDay = $("#currentDay");
const timeBlocks = $(".textarea");
//displays the current day in the header
currentDay.text(moment().format("dddd MMMM Do"));

let currentHour = moment().format("HH");

//color-codes the textarea based on past, present, and future
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
  //gets saved events from local storage
  $(this).text(localStorage.getItem($(this).attr("data-hour")));
});

//saves text from the textarea in local storage. it is keyed to the hour
$("button").click(function () {
  let occasion = $(this).siblings('textarea').val();
  let occasionKey = $(this).siblings('textarea').attr("data-hour");
  localStorage.setItem(occasionKey, occasion);
});
