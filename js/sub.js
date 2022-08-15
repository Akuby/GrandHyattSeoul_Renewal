$('#sub_rooms > h1').animate({
  opacity: 1,
  top: '40%'
}, 1000)
setTimeout(() => {
  $('#sub_rooms > p').animate({
    opacity: 1,
    top: '53%'
  }, 1000)
}, 200);

// room selection
$('#roomSelect ul li').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('selected').siblings().removeClass('selected');
  let showName = $(this).data('sel')
  showName == 'all' ?
    $('section').css({
      height: 'auto'
    }) :
    $(`#${showName}`).css({
      height: 'auto'
    }).siblings('section').css({
      height: 0
    })
})

// Slider cursor 
$('#tip').hide()
$('.swiper').each(function() {
$(this).append('<div id="tip">drag</div>');
$(this).on('mouseenter', function () {
  $(this).css({
    // cursor: 'none'
  })
  $('#tip')
    .show()
}).on('mouseleave', function () {
  $('#tip').hide();
}).on('mousemove', function (e) {
  $('#tip').css({
    top: e.offsetY + 5,
    left: e.offsetX + 5
  })
}).on('mousedown', function (e) {
  $('#tip').css({
    top: e.offsetY + 5,
    left: e.offsetX + 5
  })
})
})







const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});