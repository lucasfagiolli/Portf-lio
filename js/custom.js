$(function () {
  $('.menu-btn').click(function () {
    $('#header .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  $('#header .menu li a').click(function () {
    $('html').css('scrollBehavior', 'smooth')
  })
})