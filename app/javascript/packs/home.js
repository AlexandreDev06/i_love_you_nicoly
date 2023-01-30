$(document).ready(function() {
  

  $('.button-next').each(function() {
    $(this).on('click', function() {
      next_div($(this).attr('id'));
    });
  });
});

function next_div(id) {
  var sizes_of_progress = {question_0: 0, question_1: 50}

  var current_score = $('#score_label').text()
  var button_score = $('#' + id).attr('data-points')

  // next question
  $('#question_' + (parseInt(id) - 1)).fadeOut('visually-hidden-focusable');
  setTimeout(() => {
    $('#question_' + id).fadeIn('visually-hidden-focusable');
  }, 1000);

  // increment score
  $('#score_label').text(parseInt(current_score) + parseInt(button_score))
  for (let index = 0; index < 2; index++) {
    blink_text()
  }

  // increment progress bar
  $('#progress-bar').val(sizes_of_progress['question_' + id])
}

function blink_text() {
  $('#score_label').fadeOut(500);
  $('#score_label').fadeIn(500);
}
