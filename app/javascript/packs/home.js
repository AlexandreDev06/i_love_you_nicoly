import Toastify from 'toastify-js'

$(document).ready(function() {
  $('.button-next').each(function() {
    $(this).on('click', function() {
      next_div($(this).attr('id'));
    });
  });
});

function next_div(id) {
  var sizes_of_progress = { question_0: 0, question_1: 50 }

  var current_score = $('#score_label').text()
  var button_score = $('#' + id).attr('data-points')
  var next_question_id = $('#' + id).parent().attr('data-next-question')
  console.log(next_question_id)
  console.log($('#question_' + next_question_id))

  // next question
  $('#question_' + (parseInt(next_question_id) - 1)).fadeOut('visually-hidden-focusable');
  setTimeout(() => {
    $('#question_' + next_question_id).fadeIn('visually-hidden-focusable');
  }, 1000);

  // increment score
  $('#score_label').text(parseInt(current_score) + parseInt(button_score))
  for (let index = 0; index < 2; index++) {
    blink_text()
  }

  // increment progress bar
  $('#progress-bar').val(sizes_of_progress['question_' + id])

  // show toastify if necessary
  if ($('#' + id).hasClass('correct')) {
    toastify('success')
  } else if ($('#' + id).hasClass('wrong')) {
    toastify('error')
  }

}

function blink_text() {
  $('#score_label').fadeOut(500);
  $('#score_label').fadeIn(500);
}

function toastify(answer) {
  if (answer == 'success') {
    Toastify({
      text: "Acertou!",
      className: "toasty correct_toasty",
      duration: 3000
    }).showToast();
  } else if (answer == 'error'){
    Toastify({
      text: "Errou :(",
      className: "toasty wrong_toasty",
      duration: 3000
    }).showToast();
  }
}