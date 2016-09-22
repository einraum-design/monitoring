$(document).ready(function(){

function showPoints(){

  $('#downstream-links, #upstream-links, #compounding-links, .compounding-arrow, .upstream-arrow, .downstream-arrow').css('display','none');

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

  $("#upstream-link").on('click', function(){
    $("span").removeClass('active-auswahl-punkt');
    $(".anlagen-bild").css({'transform':'translate(500px, -120px) scale(2.2)'});
    $("#upstream-links").fadeIn(200);

    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).css('right','0px').removeClass('left newPos');

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left newPos');
    $('.downstream-arrow').css('display','none').removeClass('left newPos');

    $('#downstream-links, #compounding-links').fadeOut(200);
  });

  $('#compounding-link, #foerderdruck-link-2').on('click', function(){
    $(".anlagen-bild").css({'transform':'translate(100px, -190px) scale(2.8)'});
    $("#compounding-links a").css({'transform':'scale(.7)'});
    $("#upstream-links").fadeOut(200);
    $("span").removeClass('active-.dot');
    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.compounding-arrow').css('display','none').removeClass('left newPos');

    // Diese(r) Button(s) sind aktiv
    $('.upstream-arrow').fadeIn(300).addClass('left');
    $('.downstream-arrow').fadeIn(300);

    $('#downstream-links').fadeOut(200);
    $('#compounding-links').fadeIn(200);
  });

  $('#downstream-link, #foerderdruck-link-3').on('click', function(){
    $(".anlagen-bild").css({'transform':'translate(-600px, -120px) scale(2.2)'});
    //$('#downstream-links').delay(300).fadeIn(200);
    $("span").removeClass('active-auswahl-punkt');
    $("#upstream-links").fadeOut(200);

    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).addClass('left newPos');

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

  $('#full-link').on('click', function(){
    $("#sensoren-hauptnavi").tabs({ active: 0 });
    $("#upstream-links, #compounding-links").fadeOut(200);
    $("span").removeClass('active-.dot');
    $('.compounding-arrow').css('display','none').removeClass('left');
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

}
showPoints();


});
