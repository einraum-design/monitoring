/* navigationSwitch */

$(document).ready(function(){

  // Navigation

  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = 0;
    this.initEvents();

  }
  DropDown.prototype = {

    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(){
        $(this).toggleClass('active');
        return false;
      });

      $('li').on('click', function(){
        $(this).addClass('give');
        $(this).siblings().removeClass('give');
      });

      $('#dd li:first-child').on('click',function(){
        $('body').fadeOut(500,function(){
          $('body').load("index.html").fadeIn(1300);
        });
      });

      $('#dd li:nth-child(2)').on('click',function(){
        $('body').fadeOut(500,function(){
            $('body').load("material-tracking.html").fadeIn(1300);
        });

      });

      obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
      });

      },
/*
      getValue : function() {
        return this.val;

      },
      getIndex : function() {
        return this.index;

      }*/
  }

  $(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
      $('.change-app').removeClass('active');
      $('#page').removeClass('blur');
    });

    $('#dd').on('click', function(){
      $('#page').toggleClass('blur');
    });

  });

});
