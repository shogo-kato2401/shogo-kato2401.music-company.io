$(function(){
  $(window).scroll(function(){
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function(){
      const targetPosition = $(this).offset().top;
      if(scrollAmount > targetPosition - wHeight + 60){
        $(this).addClass("fadeInDown");
      }
    });
  });
});

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
    scroll_effect();
  });

  function scroll_effect(){
    $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight){
        $(this).addClass('effect-scroll');
      }
    });
  }
};