$(document).ready(function(){

  function zoomPoints(){

    // UPSTREAM

    $('#filter-1, #filter-1-link').click(function() {
      console.log('clicked');
        $("#second-row").tabs({ active: 1 });
        $("#filter-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 1,
          componentName: 'Filter',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#filter-1-point .auswahl-punkt').on('click',function(){
        $('#filter-1-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#ati, #ati-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("#ati-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -320px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 3,
          componentName: 'ATI',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#ati-point .auswahl-punkt').on('click',function(){
        $('#ati-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zxd, #zxd-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("#zxd-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 4,
          componentName: 'ZXD',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zxd-point .auswahl-punkt').on('click',function(){
        $('#zxd-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#hfs, #hfs-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("#hfs-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(680px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 6,
          componentName: 'HFS',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#hfs-point .auswahl-punkt').on('click',function(){
        $('#hfs-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zrd, #zrd-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("#zrd-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(650px, -350px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 7,
          componentName: 'ZRD',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zrd-point .auswahl-punkt').on('click',function(){
        $('#zrd-link').trigger("click");
    });

    ///////////////////////////////////////

    // COMPOUNDING

    $('#dosierer-1, #dosierer-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(330px, -440px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 9,
          componentName: 'K-ML-D5-BSP-135',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#dosierer-1-point .auswahl-punkt').on('click',function(){
        $('#dosierer-1-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-2, #dosierer-2-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("#dosierer-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(290px, -440px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 11,
          componentName: 'K2-ML-D5-S60',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#dosierer-2-point .auswahl-punkt').on('click',function(){
        $('#dosierer-2-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-3, #dosierer-3-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("#dosierer-3-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(210px, -500px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 13,
          componentName: 'K-ML-D5-KT20',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#dosierer-3-point .auswahl-punkt').on('click',function(){
        $('#dosierer-3-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-4, #dosierer-4-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("#dosierer-4-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(130px, -570px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 15,
          componentName: 'K-ML-KV3-6D',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#dosierer-4-point .auswahl-punkt').on('click',function(){
        $('#dosierer-4-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#dosierer-5, #dosierer-5-link').click(function() {
        $("#second-row").tabs({ active: 5 });
        $("#dosierer-5-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(130px, -520px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 17,
          componentName: 'K2-ML-T60',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#dosierer-5-point .auswahl-punkt').on('click',function(){
        $('#dosierer-5-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zsk, #zsk-link').click(function() {
        $("#second-row").tabs({ active: 6 });
        $("#zsk-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(320px, -590px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 18,
          componentName: 'ZSK',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zsk-point .auswahl-punkt').on('click',function(){
        $('#zsk-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zsb, #zsb-link').click(function() {
        $("#second-row").tabs({ active: 7 });
        $("#zsb-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(200px, -590px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 19,
          componentName: 'ZSB',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zsb-point .auswahl-punkt').on('click',function(){
        $('#zsb-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zs_eg, #zs_eg-link').click(function() {
        $("#second-row").tabs({ active: 8 });
        $("#zs_eg-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(70px, -590px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 20,
          componentName: 'ZS_EG',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zs_eg-point .auswahl-punkt').on('click',function(){
        $('#zs_eg-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#ssd, #ssd-link').click(function() {
        $("#second-row").tabs({ active: 9 });
        $("#ssd-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-250px, -590px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 21,
          componentName: 'StrandSuctionDevice',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#ssd-point .auswahl-punkt').on('click',function(){
        $('#ssd-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#sp500, #sp-link').click(function() {
        $("#second-row").tabs({ active: 10 });
        $("#sp500-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-410px, -570px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 22,
          componentName: 'SP500',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#sp500-point .auswahl-punkt').on('click',function(){
        $('#sp-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#zvb, #zvb-link').click(function() {
        $("#second-row").tabs({ active: 11 });
        $("#zvb-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-460px, -600px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 24,
          componentName: 'ZVB',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#zvb-point .auswahl-punkt').on('click',function(){
        $('#zvb-link').trigger("click");
    });

    ///////////////////////////////////////

    $('#screener, #screener-link').click(function() {
        $("#second-row").tabs({ active: 11 });
        $("#screener-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-450px, -580px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 23,
          componentName: 'Screener',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#screener-point .auswahl-punkt').on('click',function(){
        $('#screener-link').trigger("click");
    });

    ///////////////////////////////////////

    // DOWNSTREAM


    $('#bxc, #bxc-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#bxc-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-670px, -330px) scale(6)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 25,
          componentName: 'BXC',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#bxc-point .auswahl-punkt').on('click',function(){
      console.log('clicke');
      $('#bxc-link').trigger("click");
    });

    $('#wzk, #wzk-link').click(function() {
        $("#second-row").tabs({ active: 2 });
        $("#wzk-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-810px, 50px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 26,
          componentName: 'WZK',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#wzk-point .auswahl-punkt').on('click',function(){
      console.log('clicke');
      $('#wzk-link').trigger("click");
    });

    $('#ibp, #ibp-link').click(function() {
        $("#second-row").tabs({ active: 3 });
        $("#ibp250-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-980px, -400px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 30,
          componentName: 'IBP250',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#ibp250-point .auswahl-punkt').on('click',function(){
      console.log('clicke');
      $('#ibp-link').trigger("click");
    });

    $('#wet, #wet-link').click(function() {
        $("#second-row").tabs({ active: 4 });
        $("#wet-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(-1330px, 60px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 31,
          componentName: 'WET',
          rohstoffTracking: false
        });
        return false;
    })

    $('a#wet-point .auswahl-punkt').on('click',function(){
      console.log('clicke');
      $('#wet-link').trigger("click");
    });

    }

    // SETBACK ACTIVE LINK

    $('#upstream-link, #compounding-link, #downstream-link, #full-link').click(function() {
      $("#second-row-downstream, #second-row-compounding, #second-row-upstream").tabs({ active: 0 });
      $("#sensoren-hauptnavi").tabs({ active: 0 });
      return false;
    })

    // MATERIAL TRACKING

    // SILO 1
    $('#silo-1, #silo-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 0,
          componentName: 'Silo_1',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 2
    $('#silo-2, #silo-2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 2,
          componentName: 'Silo_2',
          rohstoffTracking: true
        });
        return false;
    })

    // BIG BAG
    $('#bigbag, #bigbag-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#bigbag-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 5,
          componentName: 'BigBag_1',
          rohstoffTracking: true
        });
        return false;
    })

    // TAGESSILO 1
    $('#tagessilo-1, #tagessilo-1-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-1-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 8,
          componentName: 'Tagessilo_1',
          rohstoffTracking: true
        });
        return false;
    })

    // DOSIERER 1
    $('#dosierer-1-r, #dosierer-1-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-1-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 9,
          componentName: 'K-ML-D5-BSP-135',
          rohstoffTracking: true
        });
        return false;
    })

    // TAGESSILO 2
    $('#tagessilo-2, #tagessilo-2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 10,
          componentName: 'Tagessilo_2',
          rohstoffTracking: true
        });
        return false;
    })

    // DOSIERER 2
    $('#dosierer-2-r, #dosierer-2-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-2-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 11,
          componentName: 'K2-ML-D5-S60',
          rohstoffTracking: true
        });
        return false;
    })

    // HOPPER
    $('#hopper, #hopper-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#hopper-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 12,
          componentName: 'Hopper',
          rohstoffTracking: true
        });
        return false;
    })

    // DOSIERER 3
    $('#dosierer-3-r, #dosierer-3-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-3-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 13,
          componentName: 'K-ML-D5-KT20',
          rohstoffTracking: true
        });
        return false;
    })

    // BIG BAG 2
    $('#bigbag2, #bigbag2-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#bigbag2-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 14,
          componentName: 'BigBag_2',
          rohstoffTracking: true
        });
        return false;
    })

    // DOSIERER 4
    $('#dosierer-4-r, #dosierer-4-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-4-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 15,
          componentName: 'K-ML-KV3-6D',
          rohstoffTracking: true
        });
        return false;
    })

    // TAGESSILO 3
    $('#tagessilo-3, #tagessilo-3-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#tagessilo-3-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 16,
          componentName: 'Tagessilo_3',
          rohstoffTracking: true
        });
        return false;
    })

    // DOSIERER 5
    $('#dosierer-5-r, #dosierer-5-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#dosierer-5-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 17,
          componentName: 'K2-ML-T60',
          rohstoffTracking: true
        });
        return false;
    })

    // WZK
    $('#wzk-r, #wzk-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#wzk-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 26,
          componentName: 'WZK',
          rohstoffTracking: true
        });
        return false;
    })

    // IBP250
    $('#ibp-r, #ibp-r-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#ibp-r-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 30,
          componentName: 'IBP250',
          rohstoffTracking: true
        });
        return false;
    })



    // SILO 3
    $('#silo-3, #silo-3-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-3-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 28,
          componentName: 'Silo_3',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 4
    $('#silo-4, #silo-4-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-4-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 29,
          componentName: 'Silo_4',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 5
    $('#silo-5, #silo-5-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-5-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 32,
          componentName: 'Silo_5',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 6
    $('#silo-6, #silo-6-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-6-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 33,
          componentName: 'Silo_6',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 7
    $('#silo-7, #silo-7-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-6-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 34,
          componentName: 'Silo_7',
          rohstoffTracking: true
        });
        return false;
    })

    // SILO 8
    $('#silo-8, #silo-8-link').click(function() {
        $("#second-row").tabs({ active: 1 });
        $("#silo-8-point .auswahl-punkt").addClass('active-auswahl-punkt');
        $(".anlagen-bild").css({'transform':'translate(1250px, -120px) scale(4.3)'});
        window.sendSpacebrewMessage('componentActivated', {
          componentId: 35,
          componentName: 'Silo_8',
          rohstoffTracking: true
        });
        return false;
    })


  zoomPoints();

  ///////////////////////////////////////////////////////////

  // Switchen zwischen den Ansichten, Update Zoom
  function caseSwitch(){

    $('#toggle-switch').on('change', function() {
      if ($('body').hasClass('other')) {

        $('#bxc, #bxc-link').click(function() {
            $("#second-row").tabs({ active: 1 });
            $("#bxc .auswahl-punkt").addClass('active-auswahl-punkt');
            $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});
            return false;
          })

        if ($('#bxc .auswahl-punkt').hasClass('active-auswahl-punkt')){
          $(".anlagen-bild").css({'transform':'translate(-1200px, -0px) scale(4.3)'});
          return false;
        }

      } else {

        $('#bxc, #bxc-link').click(function() {
            $("#second-row").tabs({ active: 1 });
            $("#bxc .auswahl-punkt").addClass('active-auswahl-punkt');
            $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});
            return false;
          })

        if ($('#bxc .auswahl-punkt').hasClass('active-auswahl-punkt')){
          $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});
          return false;
        }
      }
    });
  }

  caseSwitch();

});
