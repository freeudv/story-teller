$(document).ready(function() {
  //hamburger
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('is-active')

    if ($('.main-nav').is(':visible')) {
      $('.main-nav').fadeOut(600)
    } else {
      $('.main-nav').fadeIn(600)
    }
  })

  $('.main-nav__item').click(function() {
    $('.main-nav').fadeOut(600)
    $('.hamburger').toggleClass('is-active')
  })

  //animated page scrolling
  $('.main-nav a').mPageScroll2id()
})
