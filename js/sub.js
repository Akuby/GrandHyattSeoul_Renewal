// 헤더 애니메이션
$('#sub_rooms').prepend('<div class="bg"><div></div></div>')

$('#sub_rooms > h1').animate({
  opacity: 1
}, 1000)
setTimeout(() => {
  $('#sub_rooms > p').animate({
    opacity: 1
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

const swiper = new Swiper(".mySwiper", {
  grabCursor: true
});