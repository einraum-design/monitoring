$(document).ready(function(){

function showPoints(){

  $('#downstream-links, .compounding-arrow, .upstream-arrow, .downstream-arrow').css('display','none');

  $("#upstream-link").on('click', function(){
    $("#span").removeClass('active-dot');
    $(".anlagen-bild").css({'transform':'translate(580px, -70px) scale(2.2)'});

    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).css('right','0px').removeClass('left newPos');

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left newPos');
    $('.downstream-arrow').css('display','none').removeClass('left newPos');
  });

  $('#compounding-link, #foerderdruck-link-2').on('click', function(){
    $(".anlagen-bild").css({'transform':'translate(-600px, 0px) scale(2.2)'});
    $("#span").removeClass('active-dot');
    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.compounding-arrow').css('display','none').removeClass('left newPos');

    // Diese(r) Button(s) sind aktiv
    $('.upstream-arrow').fadeIn(300).addClass('left');
    $('.downstream-arrow').fadeIn(300);
  });

  $('#downstream-link, #foerderdruck-link-3').on('click', function(){
    $(".anlagen-bild").css({'transform':'translate(-600px, 0px) scale(2.2)'});
    $('#downstream-links').delay(300).fadeIn(200);
    $("span").removeClass('active-dot');

    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).addClass('left newPos');

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

  $('#full-link').on('click', function(){
    $("#sensoren-hauptnavi").tabs({ active: 0 });
    $('#downstream-links').fadeOut(0);
    $("span").removeClass('active-dot');
    $('.compounding-arrow').css('display','none').removeClass('left');
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

}
showPoints();


});
