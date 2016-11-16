var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#77B1A9", "#73A857"];

$(document).ready(function() {
  $.ajaxSetup({cache:false});
  var actualColor = -1;
  // Define color changing function
  function changeColor() {
    var color = actualColor;
    while(actualColor == color) {
      color = colors[Math.floor(Math.random()*colors.length)];
    }
    $('h1').css('color', color);
    $('body').css('background-color', color);
    $('#quote-wrap').css('color', color);
    $('button').css('background', color);
  }

  $('#btn-another').click(function () {
    // Get Quote
    var data;
    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(data){
      $('#quote').html("<i class='fa fa-quote-left'></i> "+ data.quoteText +" <i class='fa fa-quote-right'>");
      $('#quote-author').text(data.quoteAuthor);
      changeColor();
    });
  });
});
