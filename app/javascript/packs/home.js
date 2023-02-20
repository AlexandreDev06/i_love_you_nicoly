import Toastify from 'toastify-js'

$(function() {
  $('.button-next').each(function() {
    $(this).on('click', function() {
      next_div($(this).attr('id'));
    });
  });
  $('.joke_with_rat').hover(function() {
    console.log('hover')
    $(this).text('AMA SIM 😡')
  });
  $('.rosa').hover(function() {
    $(this).text('Rosa 🏳️‍🌈?')
  });
  $('.hate_careca').hover(function() {
    $(this).text('VAI AMAR SIM 😡')
  });
});

function next_div(id) {
  var sizes_of_progress = {
    question_0: 0,
    question_1: 6,
    question_2: 12,
    question_3: 18,
    question_4: 24,
    question_5: 30,
    question_6: 36,
    question_7: 42,
    question_8: 48,
    question_9: 54,
    question_10: 60,
    question_11: 66,
    question_12: 72,
    question_13: 78,
    question_14: 84,
    question_15: 90,
    question_16: 100
  }

  console.log(id)
  

  var current_score = $('#score_label').text()
  var button_score = $('#' + id).attr('data-points')
  var next_question_id = $('#' + id).parent().attr('data-next-question')
  var current_id = parseInt(next_question_id) - 1
  console.log(next_question_id)

  // next question
  $('#question_' + current_id).fadeOut('visually-hidden-focusable');
  setTimeout(() => {
    $('#question_' + next_question_id).fadeIn('visually-hidden-focusable');
  }, 1000);

  // increment score
  $('#score_label').text(parseInt(current_score) + parseInt(button_score))
  for (let index = 0; index < 2; index++) {
    blink_text()
  }

  // increment progress bar
  $('#progress-bar').val(sizes_of_progress['question_' + current_id])

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
  } else if (answer == 'error') {
    Toastify({
      text: "Errou :(",
      className: "toasty wrong_toasty",
      duration: 3000
    }).showToast();
  }
}