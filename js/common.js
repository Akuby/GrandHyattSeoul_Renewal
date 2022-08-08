$('.promo-slider ul li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/offer-${$(this).index()+1}.png)`
  })
})
$('.rooms-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/room-${$(this).index()+1}.png)`
  })
})
$('.dining-slider li').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/dining-${$(this).index()+1}.png)`
  })
})
$('#facilities article').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
  })
})
$('.posts a').each(function () {
  $(this).css({
    backgroundImage: `url(./assets/sns-${$(this).parent().data('bg')}.png)`
  })
})
$('#facilities article').each(function () {
  if ($(window).innerWidth() < 899) {
    $(this).css({
      backgroundImage: `url(./assets/mobile_facilities-${$(this).index()+1}.png)`
    })
  } else {
    $(this).css({
      backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
    })
  }
})





// header
$(window).scroll(function () {
    if ($(document).scrollTop() >= $('header').innerHeight()) {
      $('#navWrap').addClass('min');
      $('header>a.mobile').addClass('min')
    } else if ($(document).scrollTop() < $('header').innerHeight()) {
      $('#navWrap').removeClass('min');
    }
})
let state = 1;
let scrolling = function (e) {
  if ($(document).scrollTop() >= $('header').innerHeight()) {
    if (e.wheelDelta < 0 && state == 1) { // 휠을 내릴때
      state = 0;
      $('#navWrap.min:not(:animated)').animate({
        top: -130
      }, 200, function () {
        state = 1
      })
    } else if (e.wheelDelta > 0 && state == 1) {
      state = 0;
      $('#navWrap.min:not(:animated)').animate({
        top: 0
      }, 200, function () {
        state = 1
      })
    }
  }
}
document.addEventListener('wheel', function (e) {
  if ($(window).innerWidth() > 899) {
    scrolling(e)
  }
})

$('header > a.mobile').on('click', function() {
  $('#m_navWrap').animate({right : 0})
})
$('#m_navWrap > a.mobile').on('click', function() {
  $('#m_navWrap').animate({right : '-80vw'})
})
$('#m_lnb .ul1 > li').on('click', function() {
  $(this).siblings('li').removeClass('onList');
  $(this).addClass('onList');
})
// form
$('#reserv_content .contWrap li').on('click', function () {
  $('#reserv_content .contWrap li').removeClass('selected')
  $(this).addClass('selected')
  $('#reserv_content .contWrap').prepend($(this))
})

// specialOffers
let liLength = $('.promo-slider ul li').innerWidth() + 40;
let prevSliding = function () {
  $('.promo-slider ul:not(:animated)').prepend($('>li:last', $('.promo-slider ul'))).css({
    marginLeft: -liLength
  }).animate({
    marginLeft: 0
  }, 500)
}
let nextSliding = function () {
  $('.promo-slider ul:not(:animated)').animate({
    marginLeft: -liLength
  }, 500, function () {
    $(this)
      .css({
        marginLeft: '0'
      })
      .append($('>li:first', $(this)))
  })
}
// rooms, dining
let twinWidth = parseInt($('#rooms').css('width')) * 42 / 100;
let numState = 1;
let slideLeft;
let numSliding = function () {
  if (numState == 1) {
    numState = 0;
    slideLeft = $('.twin ul li').width() * ($(this).index());
    $(this).parent().prev().children('ul').stop().animate({
      marginLeft: -slideLeft
    }, 750);
    $(this).addClass('on').siblings('a').removeClass('on').children('span').animate({
      width: '0px',
      margin: '0px'
    }, 750);
    $(this).children('span').animate({
      width: '85px',
      margin: '0 10px'
    }, 750, function () {
      numState = 1;
    })
  }
}

$('.promo-control .prev').on('click', prevSliding)
$('.promo-control .next').on('click', nextSliding)
$('.rooms-pagination a, .dining-pagination a').on('click', numSliding)

// sns
let snsMoving = function () {
  let snsState = 1;
  if (snsState == 1) { //eventlistener를 걸어줘야 되는데.. 어케하지
    for (let i = 0; i < 999; i++) {
      $('#sns .posts ul').animate({
        marginLeft: `-=${$('#sns .posts ul').children('li').width() * 2
      }`
      }, 8000, 'linear', function () {
        $(this).append($(this).children('li:nth-child(1)'));
        $(this).append($(this).children('li:nth-child(1)'));
        $(this).css({
          marginLeft: 0
        })
      })
    }
  }
  $('#sns .posts ul li').mouseenter(function () {
    snsState = 0;
  }).mouseleave(function () {
    snsState = 1;
  })
}

if($(window).innerWidth() > 899) {
  snsMoving();
}

// 작동 안됨 not working 왜냐면 어케하는지 모르겠음
// + 왠지 모르겠는데 이미지가 자꾸 우글거림


// 리사이즈
let resizing = function () {
  // special offer 영역 조절
  liLength = $('.promo-slider ul li').innerWidth() + 40;

  // rooms, dining 영역 조절

  $('.rooms-slider').css({
    marginLeft: -$('.rooms-slider li').width() * $('.rooms-pagination a.on').index()
  })
  $('.dining-slider').css({
    marginLeft: -$('.dining-slider li').width() * $('.dining-pagination a.on').index()
  })
  twinWidth = parseInt($('.twin').css('width')) * 42 / 100;
  $('#rooms svg line').attr('x2', twinWidth).css({strokeDasharray:twinWidth, strokeDashoffset:twinWidth});
  $('#dining svg line').attr('x1', twinWidth).css({strokeDasharray:twinWidth, strokeDashoffset:twinWidth});


  // facilities 영역 조절
  $('#facilities article').each(function () {
    if ($(window).innerWidth() < 899) {
      $(this).css({
        backgroundImage: `url(./assets/mobile_facilities-${$(this).index()+1}.png)`
      })
    } else {
      $(this).css({
        backgroundImage: `url(./assets/facilities-${$(this).index()+1}.png)`
      })
    }
  })

  // membership 영역 조절
  if ($(window).innerWidth() < 1200) {
    $('#membership svg line').attr({
      'y1': '220',
      'y2': '220'
    })
  }
}
resizing();
$(window).on('resize', resizing)

// 스크롤
$(window).on('scroll', function () {
  let curScr = $(document).scrollTop() - 200;
  let esgPos = $('#ESG').position().top - $('#ESG').height();
  let roomPos = $('#rooms').position().top - parseInt($('#rooms').css('marginTop'));
  let dinPos = $('#dining').position().top - $('#dining').height();
  if ($(window).innerWidth() > 1199 && curScr >= esgPos) {
    $('#ESG img').addClass('shadow-pulse')
  } else if (curScr < esgPos - 500) {
    $('#ESG img').removeClass('shadow-pulse')
  }
  if (curScr >= roomPos) {
    $('#rooms svg line').css({
      animationName: 'lineMove',
      animationDuration: '4s',
      animationFillMode: 'forwards'
    })
  } else if (curScr < roomPos - 300) {
    $('#rooms svg line').css({
      animationName: 'none'
    })
  }
  if (curScr >= dinPos) {
    $('#dining svg line').css({
      animationName: 'lineMove',
      animationDuration: '4s',
      animationFillMode: 'forwards'
    })
  } else if (curScr < dinPos - 300) {
    $('#dining svg line').css({
      animationName: 'none'
    })
  }
})