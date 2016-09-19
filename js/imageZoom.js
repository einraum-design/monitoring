$(document).ready(function(){

function zoomPoints(){

  // UPSTREAM

  $('#filter-1, #filter-1-link').click(function() {
      $("#second-row").tabs({ active: 1 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-750px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 1,
        componentName: 'Filter'
      });
      return false;
  })

  $('#ati, #ati-link').click(function() {
      $("#second-row").tabs({ active: 2 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-730px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 3,
        componentName: 'ATI'
      });
      return false;
  })

  $('#zxd, #zxd-link').click(function() {
      $("#second-row").tabs({ active: 3 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-710px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 4,
        componentName: 'ZXD'
      });
      return false;
  })

  $('#hfs, #hfs-link').click(function() {
      $("#second-row").tabs({ active: 4 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-680px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 6,
        componentName: 'HFS'
      });
      return false;
  })

  $('#zrd, #zrd-link').click(function() {
      $("#second-row").tabs({ active: 4 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-680px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 7,
        componentName: 'ZRD'
      });
      return false;
  })


  // COMPOUNDING

  $('#dosierer-1, #dosierer-1-link').click(function() {
      $("#second-row").tabs({ active: 1 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-930px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 9,
        componentName: 'K-ML-D5-BSP-135'
      });
      return false;
  })

  $('#dosierer-2, #dosierer-2-link').click(function() {
      $("#second-row").tabs({ active: 2 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-910px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 11,
        componentName: 'K2-ML-D5-S60'
      });
      return false;
  })

  $('#dosierer-3, #dosierer-3-link').click(function() {
      $("#second-row").tabs({ active: 3 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-880px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 13,
        componentName: 'K-ML-D5-KT20'
      });
      return false;
  })

  $('#dosierer-4, #dosierer-4-link').click(function() {
      $("#second-row").tabs({ active: 4 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-860px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 15,
        componentName: 'K-ML-KV3-6D'
      });
      return false;
  })

  $('#dosierer-5, #dosierer-5-link').click(function() {
      $("#second-row").tabs({ active: 5 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-840px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 17,
        componentName: 'K2-ML-T60'
      });
      return false;
  })

  $('#zsk, #zsk-link').click(function() {
      $("#second-row").tabs({ active: 6 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-820px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 18,
        componentName: 'ZSK'
      });
      return false;
  })

  $('#zsb, #zsb-link').click(function() {
      $("#second-row").tabs({ active: 7 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-800px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 19,
        componentName: 'ZSB'
      });
      return false;
  })

  $('#zs_eg, #zs_eg-link').click(function() {
      $("#second-row").tabs({ active: 8 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-780px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 20,
        componentName: 'ZS_EG'
      });
      return false;
  })

  $('#ssd, #ssd-link').click(function() {
      $("#second-row").tabs({ active: 9 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-760px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 21,
        componentName: 'StrandSuctionDevice'
      });
      return false;
  })

  $('#sp500, #sp-link').click(function() {
      $("#second-row").tabs({ active: 10 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-740px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 22,
        componentName: 'SP500'
      });
      return false;
  })

  $('#zvb, #zvb-link').click(function() {
      $("#second-row").tabs({ active: 11 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-700px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 24,
        componentName: 'ZVB'
      });
      return false;
  })

  $('#screener, #screener-link').click(function() {
      $("#second-row").tabs({ active: 11 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-720px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', {
        componentId: 23,
        componentName: 'Screener'
      });
      return false;
  })

  // DOWNSTREAM

  $('#bxc, #bxc-link').click(function() {
      $("#second-row").tabs({ active: 1 });
      $("#bxc span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-980px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', 'bxc');
      return false;
  })

  $('#wzk, #wzk-link').click(function() {
      $("#second-row").tabs({ active: 2 });
      $("#wzk span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-970px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', 'wzk');
      return false;
  })

  $('#ibp, #ibp-link').click(function() {
      $("#second-row").tabs({ active: 3 });
      $("#wet span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-950px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', 'ibp');
      return false;
  })

  $('#wet, #wet-link').click(function() {
      $("#second-row").tabs({ active: 4 });
      $("#wet span").addClass('active-dot');
      $(".anlagen-bild").css({'transform':'translate(-930px, -120px) scale(4.3)'});
      window.sendSpacebrewMessage('componentActivated', 'wet');
      return false;
  })

  }

  // SETBACK ACTIVE LINK

  $('#upstream-link, #compounding-link, #downstream-link, #full-link').click(function() {
    $("#second-row-downstream, #second-row-compounding, #second-row-upstream").tabs({ active: 0 });
    $("#sensoren-hauptnavi").tabs({ active: 0 });
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
          $("#bxc span").addClass('active-dot');
          $(".anlagen-bild").css({'transform':'translate(-1300px, -0px) scale(4.3)'});
          return false;
        })

      if ($('#bxc span').hasClass('active-dot')){
        $(".anlagen-bild").css({'transform':'translate(-1200px, -0px) scale(4.3)'});
        return false;
      }

    } else {

      $('#bxc, #bxc-link').click(function() {
          $("#second-row").tabs({ active: 1 });
          $("#bxc span").addClass('active-dot');
          $(".anlagen-bild").css({'transform':'translate(-380px, -120px) scale(4.3)'});
          return false;
        })

      if ($('#bxc span').hasClass('active-dot')){
        $(".anlagen-bild").css({'transform':'translate(-580px, -120px) scale(4.4)'});
        return false;
      }
    }
  });
}

caseSwitch();

});
