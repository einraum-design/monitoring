$(document).ready(function(){

  $("#full-link").click(function(){
    $(".anlagen-bild").css({'transform':'translate(0px, 0px) scale(1)'});
  });


  // Startscreen Anzeige
  // Upstream, Compounding und Downstream werden zuerst als Kacheln angezeigt.

  $('#upstream-link a').addClass('upstream-start');
  $('#compounding-link a').addClass('compounding-start');
  $('#downstream-link a').addClass('downstream-start');

  $('#full-link a').on('click',function(){
    $('#upstream-link a').addClass('upstream-start');
    $('#compounding-link a').addClass('compounding-start');
    $('#downstream-link a').addClass('downstream-start');
  });

  $('#upstream-link a, #compounding-link a, #downstream-link a').on('click',function(){
    $('#upstream-link a').removeClass('upstream-start');
    $('#compounding-link a').removeClass('compounding-start');
    $('#downstream-link a').removeClass('downstream-start');
  });

});
