$(document).ready(function () {
  $('#animal-form').submit(function (event) {
    event.preventDefault();
    const animal = $('#animal-input').val();
    if (animal === 'turtle') {
      window.location.href = "turtle.html";
    } else if (animal === 'snake') {
      window.location.href = "snake.html";
    } else if (animal === 'insect') {
      window.location.href = "insect.html";
    } else {
      window.location.href = "error.html";
    }
  });

  $('.term').click(function () {
    $(this).next('.definition').toggle();
  });

  $('#turtle-btn').click(function () {
    window.location.href = "turtle.html";
  });
  $('#snake-btn').click(function () {
    window.location.href = "snake.html";
  });
  $('#insect-btn').click(function () {
    window.location.href = "insect.html";
  });
});