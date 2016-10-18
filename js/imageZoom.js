/*function ClickPoint(index, id, positionX1, positionY1, positionX2, positionY2) {

  //vars
  this.index = index;
  this.id = id;
  this.positions = [positionX1, positionY1, positionX2, positionY2];

  this.viewMode = "3d";
  this.inFocus = false;
  this.domElement;

  //create dom element
  this.createPoint = function() {

    var point = document.createElement('li');
    point.id = this.id;
    point.className = 'clickPoint';
    point.style.left = this.positions[0] + 'px';
    point.style.top = this.positions[1] + 'px';

    var indexSpan = document.createElement('span');
    indexSpan.className = 'clickPointIndex';
    indexSpan.innerHTML = index;
    point.appendChild(indexSpan);

    var wrapper = $('#rawMaterials');
    wrapper.append(point);

    this.domElement = document.getElementById(this.id);
  }

  this.updatePoint = function() {

    this.domElement.style.backgroundColor = 'red';
  }

  //call functions
  this.createPoint();
}*/

$(document).ready(function(){

  /*//array
  var clickPoints = [];

  //fill array
  var point = new ClickPoint('1', 'test1', 200, 180, 0, 0);
  clickPoints.push(point);

  var point = new ClickPoint('2', 'test2', 300, 180, 0, 0);
  clickPoints.push(point);

  //click on point
  $('.clickPoint').click(function() {

    //add or remove class of points
    $(this).addClass('clickPointActive');
    $(this).siblings().removeClass('clickPointActive');

    //trigger tabs
    $(this).attr('id');
  });*/


  function zoomPoints(){

    // UPSTREAM

    $('#filter-1, #filter-1-link').click(function() {
      console.log('clicked');
        $("#second-row").tabs({ active: 1 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#upstream-links #filter-1-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1000px, -70px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 1,
          componentName: 'Filter',
          rohstoffTracking: false
        });
    })

    $('#filter-1-point').on('click',function(){
        $('#filter-1-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#ati, #ati-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#upstream-links #ati-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1000px, -320px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 3,
          componentName: 'ATI',
          rohstoffTracking: false
        });

    })

    $('#ati-point').on('click',function(){
        $('#ati-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zxd, #zxd-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#upstream-links #zxd-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1000px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 4,
          componentName: 'ZXD',
          rohstoffTracking: false
        });

    })

    $('#zxd-point').on('click',function(){
        $('#zxd-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#hfs, #hfs-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#upstream-links #hfs-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(680px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 6,
          componentName: 'HFS',
          rohstoffTracking: false
        });

    })

    $('#hfs-point').on('click',function(){
        $('#hfs-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zrd, #zrd-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#upstream-links #zrd-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(650px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 7,
          componentName: 'ZRD',
          rohstoffTracking: false
        });

    })

    $('#zrd-point').on('click',function(){
        $('#zrd-link').trigger("click");
    });

    ///////////////////////////////////////

    // COMPOUNDING

    $('#dosierer-1, #dosierer-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #dosierer-1-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(220px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 9,
          componentName: 'K-ML-D5-BSP-135',
          rohstoffTracking: false
        });

    })

    $('#dosierer-1-point').on('click',function(){
        $('#dosierer-1-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-2, #dosierer-2-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #dosierer-2-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(200px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 11,
          componentName: 'K2-ML-D5-S60',
          rohstoffTracking: false
        });

    })

    $('#dosierer-2-point').on('click',function(){
        $('#dosierer-2-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-3, #dosierer-3-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #dosierer-3-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(160px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 13,
          componentName: 'K-ML-D5-KT20',
          rohstoffTracking: false
        });

    })

    $('#dosierer-3-point').on('click',function(){
        $('#dosierer-3-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-4, #dosierer-4-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #dosierer-4-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(90px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 15,
          componentName: 'K-ML-KV3-6D',
          rohstoffTracking: false
        });

    })

    $('#dosierer-4-point').on('click',function(){
        $('#dosierer-4-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-5, #dosierer-5-link').click(function() {
        $("#second-row").tabs({ active: 5 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #dosierer-5-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(90px, -360px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 17,
          componentName: 'K2-ML-T60',
          rohstoffTracking: false
        });

    })

    $('#dosierer-5-point').on('click',function(){
        $('#dosierer-5-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zsk, #zsk-link').click(function() {
        $("#second-row").tabs({ active: 6 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #zsk-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(220px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 18,
          componentName: 'ZSK',
          rohstoffTracking: false
        });

    })

    $('#zsk-point').on('click',function(){
        $('#zsk-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zsb, #zsb-link').click(function() {
        $("#second-row").tabs({ active: 7 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #zsb-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(130px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 19,
          componentName: 'ZSB',
          rohstoffTracking: false
        });

    })

    $('#zsb-point').on('click',function(){
        $('#zsb-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zs_eg, #zs_eg-link').click(function() {
        $("#second-row").tabs({ active: 8 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #zs_eg-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(70px, -340px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 20,
          componentName: 'ZS_EG',
          rohstoffTracking: false
        });

    })

    $('#zs_eg-point').on('click',function(){
        $('#zs_eg-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#ssd, #ssd-link').click(function() {
        $("#second-row").tabs({ active: 9 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #ssd-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-180px, -370px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 21,
          componentName: 'StrandSuctionDevice',
          rohstoffTracking: false
        });

    })

    $('#ssd-point').on('click',function(){
        $('#ssd-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#sp500, #sp-link').click(function() {
        $("#second-row").tabs({ active: 10 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #sp500-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-300px, -390px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 22,
          componentName: 'SP500',
          rohstoffTracking: false
        });

    })

    $('#sp500-point').on('click',function(){
        $('#sp-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zvb, #zvb-link').click(function() {
        $("#second-row").tabs({ active: 11 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #zvb-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-320px, -390px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 24,
          componentName: 'ZVB',
          rohstoffTracking: false
        });

    })

    $('#zvb-point').on('click',function(){
        $('#zvb-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#screener, #screener-link').click(function() {
        $("#second-row").tabs({ active: 11 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#compounding-links #screener-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-330px, -390px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 23,
          componentName: 'Screener',
          rohstoffTracking: false
        });

    })

    $('#screener-point').on('click',function(){
        $('#screener-link').trigger("click");
    });

    ///////////////////////////////////////

    // DOWNSTREAM


    $('#bxc, #bxc-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#downstream-links #bxc-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-480px, -250px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 25,
          componentName: 'BXC',
          rohstoffTracking: false
        });

    })

    $('#bxc-point').on('click',function(){
      console.log('clicke');
      $('#bxc-link').trigger("click");
    });

    $('#wzk, #wzk-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#downstream-links #wzk-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-810px, 100px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 26,
          componentName: 'WZK',
          rohstoffTracking: false
        });

    })

    $('#wzk-point').on('click',function(){
      console.log('clicke');
      $('#wzk-link').trigger("click");
    });

    $('#ibp, #ibp-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#downstream-links #ibp250-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-980px, -380px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 30,
          componentName: 'IBP250',
          rohstoffTracking: false
        });

    })

    $('#ibp250-point').on('click',function(){
      $('#ibp-link').trigger("click");
    });

    $('#wet, #wet-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("ul li").siblings().removeClass('active-auswahl-punkt');
        $("#downstream-links #wet-point").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-1370px, 100px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 31,
          componentName: 'WET',
          rohstoffTracking: false
        });

    })

    $('#wet-point').on('click',function(){
      console.log('clicke');
      $('#wet-link').trigger("click");
    });

    }

    // SETBACK ACTIVE LINK

    $('#upstream-link, #compounding-link, #downstream-link, #full-link').click(function() {
      $("#second-row-downstream, #second-row-compounding, #second-row-upstream").tabs({ active: 0 });
      $("#sensoren-hauptnavi").tabs({ active: 0 });
      window.rawTimeline.setOverview( true );
    })

    // MATERIAL TRACKING

    $('.upstream-spacebrew').on('click', function(){
      console.log( 'i was clicked', 'upstream' );
      $(".anlagen-bild").css({'transform':'translate(830px, -150px) scale(2.8)'});
      window.rawTimeline.setSelectedComponent( 0 );
    });

    $('.compounding-spacebrew').on('click', function(){
      $(".anlagen-bild").css({'transform':'translate(360px, -320px) scale(6.3)'});
      window.rawTimeline.setSelectedComponent( 8 );
    });

    $('.downstream-spacebrew').on('click', function(){
      console.log('i was clicked downstream');
      $(".anlagen-bild").css({'transform':'translate(-400px, -65px) scale(1.7)'});
      window.rawTimeline.setSelectedComponent( 16 );
    });

    // SILO 1
    $('#silo-1, #silo-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(830px, -150px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 0,
          componentName: 'Silo_1',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 0 );
        window.rawTimeline.setOverview( false );
    })

    // SILO 2
    $('#silo-2, #silo-2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(670px, -150px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 2,
          componentName: 'Silo_2',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 2 );
        window.rawTimeline.setOverview( false );
    })

    // BIG BAG
    $('#bigbag, #bigbag-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#bigbag-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(980px, -440px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 5,
          componentName: 'BigBag_1',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 5 );
        window.rawTimeline.setOverview( false );
    })

    // TAGESSILO 1
    $('#tagessilo-1, #tagessilo-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(360px, -320px) scale(6.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 8,
          componentName: 'Tagessilo_1',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 8 );
        window.rawTimeline.setOverview( false );
    })

    // DOSIERER 1
    $('#dosierer-1-r, #dosierer-1-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-1-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(360px, -410px) scale(6.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 9,
          componentName: 'K-ML-D5-BSP-135',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 9 );
        window.rawTimeline.setOverview( false );
    })

    // TAGESSILO 2
    $('#tagessilo-2, #tagessilo-2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(340px, -320px) scale(6.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 10,
          componentName: 'Tagessilo_2',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 10 );
        window.rawTimeline.setOverview( false );
    })

    // DOSIERER 2
    $('#dosierer-2-r, #dosierer-2-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-2-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(340px, -490px) scale(7)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 11,
          componentName: 'K2-ML-D5-S60',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 11 );
        window.rawTimeline.setOverview( false );
    })

    // HOPPER
    $('#hopper, #hopper-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#hopper-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(200px, -440px) scale(6.9)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 12,
          componentName: 'Hopper',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 12 );
        window.rawTimeline.setOverview( false );
    })

    // DOSIERER 3
    $('#dosierer-3-r, #dosierer-3-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-3-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(280px, -780px) scale(9)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 13,
          componentName: 'K-ML-D5-KT20',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 13 );
        window.rawTimeline.setOverview( false );
    })

    // BIG BAG 2
    $('#bigbag2, #bigbag2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#bigbag2-point .auswahl-punkt").addClass('active-auswahl-punkt');
      $(".anlagen-bild").css({'transform':'translate(160px, -250px) scale(6.5)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 14,
          componentName: 'BigBag_2',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 14 );
        window.rawTimeline.setOverview( false );
    })

    // DOSIERER 4
    $('#dosierer-4-r, #dosierer-4-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-4-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(140px, -490px) scale(7)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 15,
          componentName: 'K-ML-KV3-6D',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 15 );
        window.rawTimeline.setOverview( false );
    })

    // TAGESSILO 3
    $('#tagessilo-3, #tagessilo-3-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-3-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(140px, -490px) scale(7)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 16,
          componentName: 'Tagessilo_3',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 16 );
        window.rawTimeline.setOverview( false );
    })

    // DOSIERER 5
    $('#dosierer-5-r, #dosierer-5-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-5-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(140px, -540px) scale(6.5)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 17,
          componentName: 'K2-ML-T60',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 17 );
        window.rawTimeline.setOverview( false );
    })

    // WZK
    $('#wzk-r, #wzk-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#wzk-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-750px, -230px) scale(3.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 26,
          componentName: 'WZK',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 26 );
        window.rawTimeline.setOverview( false );
    })

    // IBP250
    $('#ibp-r, #ibp-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#ibp-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-1100px, -410px) scale(4.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 30,
          componentName: 'IBP250',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 30 );
        window.rawTimeline.setOverview( false );
    })



    // SILO 3
    $('#silo-3, #silo-3-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-3-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-540px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 28,
          componentName: 'Silo_3',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 28 );
        window.rawTimeline.setOverview( false );
    })

    // SILO 4
    $('#silo-4, #silo-4-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-4-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-630px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 29,
          componentName: 'Silo_4',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 29 );
        window.rawTimeline.setOverview( false );
    })

    // SILO 5
    $('#silo-5, #silo-5-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-5-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-880px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 32,
          componentName: 'Silo_5',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 32 );
        window.rawTimeline.setOverview( false );

    })

    // SILO 6
    $('#silo-6, #silo-6-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-6-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-980px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 33,
          componentName: 'Silo_6',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 33 );
        window.rawTimeline.setOverview( false );
    })

    // SILO 7
    $('#silo-7, #silo-7-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-6-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-1080px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 34,
          componentName: 'Silo_7',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 34 );
        window.rawTimeline.setOverview( false );
    })

    // SILO 8
    $('#silo-8, #silo-8-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-8-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-1180px, -50px) scale(2.8)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 35,
          componentName: 'Silo_8',
          rohstoffTracking: true
        });

        window.rawTimeline.setSelectedComponent( 35 );
        window.rawTimeline.setOverview( false );
    })


  zoomPoints();

  ///////////////////////////////////////////////////////////

  // Switchen zwischen den Ansichten, Update Zoom

  /*
  function caseSwitch(){

    $('#toggle-switch').on('change', function() {
      if ($('body').hasClass('other')) {

        $('#bxc, #bxc-link').click(function() {
            $("#second-row").tabs({ active: 1 });
            $("#bxc .auswahl-punkt").addClass('active-auswahl-punkt');
            $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});

          })

        if ($('#bxc .auswahl-punkt').hasClass('active-auswahl-punkt')){
          $(".anlagen-bild").css({'transform':'translate(-1200px, -0px) scale(4.3)'});

        }

      } else {

        $('#bxc, #bxc-link').click(function() {
            $("#second-row").tabs({ active: 1 });
            $("#bxc .auswahl-punkt").addClass('active-auswahl-punkt');
            $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});

          })

        if ($('#bxc .auswahl-punkt').hasClass('active-auswahl-punkt')){
          $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});

        }
      }
    });
  }

  caseSwitch();

  */

  //change opacity
  /*$('#upstream-links .auswahl-punkt', '.second-row-navigation li a').on('click', function(event){

    //remove class
    $('#upstream-links .auswahl-punkt').removeClass('active-auswahl-punkt');
    $('#upstream-links .auswahl-punkt').css('opacity', '0.7');
    $('#upstream-links .auswahl-punkt').css('transform', 'scale(.5)');

    if ($(this).hasClass('auswahl-punkt')) {

      $(this).addClass('active-auswahl-punkt');
      $(this).css('opacity', '1');
    } else {

      console.log($(this));
    }

  });*/

  $('#upstream-links ul li').click(function() {

    $(this).addClass('active-auswahl-punkt');
    $(this).siblings().removeClass('active-auswahl-punkt');
    $('.auswahl-punkt').addClass('opacitySize');
    $('.active-auswahl-punkt').addClass('activeBig');
  });

  $('#compounding-links ul li').click(function() {

    $(this).addClass('active-auswahl-punkt');
    $(this).siblings().removeClass('active-auswahl-punkt');
    $('.auswahl-punkt').addClass('opacitySize');
    $('.active-auswahl-punkt').addClass('activeBig');
  });

  $('#downstream-links ul li').click(function() {

    $(this).addClass('active-auswahl-punkt');
    $(this).siblings().removeClass('active-auswahl-punkt');
    $('.auswahl-punkt').addClass('opacitySize');
    $('.active-auswahl-punkt').addClass('activeBig');
  });

  $('.second-row-navigation a').on('click', function(){
    $('.auswahl-punkt').addClass('opacitySize');
  });
});
