$(document).ready(function(){

  $('#legende-button').on('click', function(){
		$('#timeline-legende').toggleClass('active');
    $(this).toggleClass('active');
	});


  $("#full-link").click(function(){
    $(".anlagen-bild").css({'transform':'translate(0px, 0px) scale(1)'});
    // window.sendSpacebrewMessage('componentActivated', {
    //   componentId: 200,
    //   rohstoffTracking: false
    // });
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

$( '.sensoring-raw-materials-button' ).click( function () {
  console.log( 'sensoring-raw-materials-button' );

  window.sendSpacebrewMessage('componentActivated', {
      componentId: 40,
      componentName: 'Sensoring Raw Materials Button',
      rohstoffTracking: true
  });
} );

$( '.sensoring-compounding-button' ).click( function () {
  console.log( 'sensoring-compounding-button' );

  window.sendSpacebrewMessage('componentActivated', {
      componentId: 41,
      componentName: 'Sensoring Compounding Button',
      rohstoffTracking: true
  });
} );

$( '.sensoring-finished-products-button' ).click( function () {
  console.log( 'sensoring-compounding-button' );

  window.sendSpacebrewMessage('componentActivated', {
      componentId: 42,
      componentName: 'Sensoring Finished Products Button',
      rohstoffTracking: true
  });
} );

$( '.sensoring-back-button, .tracking-back-button' ).click( function () {
  window.sendSpacebrewMessage('componentActivated', {
      componentId: 100,
      componentName: 'Back Button',
      rohstoffTracking: false
  });
} );

$( '.tracking-back-button' ).click( function () {
  window.sendSpacebrewMessage('componentActivated', {
      componentId: 100,
      componentName: 'Back Button',
      rohstoffTracking: true
  });
} );

});
