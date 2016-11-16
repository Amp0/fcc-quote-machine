var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function() {

  // Define color changing function
  function changeColor() {
    var color = colors[Math.floor(Math.random()*colors.length)];

    $('h1').css('color', color);
    $('body').css('background-color', color);
    $('#quote-wrap').css('color', color);
    $('button').css('background', color);
  }

  $('#btn-another').click(function () {
    // Get Quote


    // Change color
    changeColor();
  });
});
