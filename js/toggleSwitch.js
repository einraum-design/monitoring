$(document).ready(function(){

  $('#toggle-switch').on('change', function() {

    if ($('body').hasClass('other')) {
      $(".two-di").animate({"opacity":0}, 700, function(){
        $(this).css('display','none');
      });


      $(".three-di").css({opacity:0});
      $('.three-di').load().delay(500).each(function(i){$(this).delay(100*i).animate({"opacity":1},200);});
      $(".three-di").css('display','inline');
      $('body').removeClass('other');
      $("li img").removeClass('new-position');
      $('.components a').addClass('2d-ansicht').removeClass('3d-ansicht');

    } else {
        $(".three-di").animate({"opacity":0}, 700, function(){
          $(this).css('display','none');
        });
        $(".two-di").css('display','inline');
        $(".two-di").css({opacity:0});
        $(".two-di").load().delay(500).each(function(i){$(this).delay(100*i).animate({"opacity":1},200);});
       $('body').addClass('other');
       $("li img").addClass('new-position');
       $('.components a').removeClass('2d-ansicht').addClass('3d-ansicht');
      }

  });
});
