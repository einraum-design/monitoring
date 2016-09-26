$(document).ready(function(){

  $("#full-link").click(function(){
    $(".anlagen-bild").css({'transform':'translate(0px, 0px) scale(1)'});
    window.sendSpacebrewMessage('componentActivated', {
      componentId: 200,
      rohstoffTracking: true
    });
  });

  $('.full-link-spacebrew').on('click',function(){
    window.sendSpacebrewMessage('componentActivated', {
      componentId: 200,
      rohstoffTracking: true
    });
  });

  $('.upstream-spacebrew').on('click', function(){
    $("#second-row-upstream-rohstoffe").tabs({ active: 0 });
    window.sendSpacebrewMessage('componentActivated', {
      componentId: 0,
      componentName: 'Silo_1',
      rohstoffTracking: true
    });
  });

  $('.compounding-spacebrew').on('click', function(){
    $("#second-row-compounding-rohstoffe").tabs({ active: 0 });
    window.sendSpacebrewMessage('componentActivated', {
      componentId: 8,
      componentName: 'Tagessilo_1',
      rohstoffTracking: true
    });
  });

  $('.downstream-spacebrew').on('click', function(){
    $("#second-row-downstream-rohstoffe").tabs({ active: 0 });
    window.sendSpacebrewMessage('componentActivated', {
      componentId: 28,
      componentName: 'Silo_3',
      rohstoffTracking: true
    });
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
