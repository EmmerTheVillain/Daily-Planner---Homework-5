//button click event listener to save description and id to local storage
  $(document).ready(function () {
  $('.saveBtn').on('click', function () {
    // get nearby values
    var desc = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //saves desc and time to local storage
    localStorage.setItem(time, desc);
  });
 
  //function to update classes and compare current time to time blocked sections
  function hourUpdater() {
    var currentHour = dayjs().hour();
    // loop over time blocks
    $('.time-block').each(function () {
      var sectionHour = parseInt($(this).attr('id').split('-')[1]);
      //checks is section is in the past, present or future and assigns appropriate class
      if(sectionHour < currentHour){
        $(this).addClass('past');
      }else if(sectionHour === currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
      }else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
// pulls saved descriptions from local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-1 .description').val(localStorage.getItem('hour-13'));
$('#hour-2 .description').val(localStorage.getItem('hour-14'));
$('#hour-3 .description').val(localStorage.getItem('hour-15'));
$('#hour-4 .description').val(localStorage.getItem('hour-16'));
$('#hour-5 .description').val(localStorage.getItem('hour-17'));
  hourUpdater();
  setInterval(hourUpdater, 15000);
  // load any saved data from localStorage
  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY, hh:mm A'));
});
