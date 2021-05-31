// hero 3
(function(){
  const hero = $('.js-hero-3');
  if (hero.length) {
    const slider = hero.find('.js-hero-3-slider'),
        prevArrow = hero.find('.js-hero-3-prev'),
        nextArrow = hero.find('.js-hero-3-next'),
        current = hero.find('.js-hero-3-current'),
        total = hero.find('.js-hero-3-total'),
        dots = hero.find('.js-hero-3-dots'),
        play = hero.find('.js-hero-3-play'),
        previews = hero.find('.js-hero-3-previews'),
        items = slider.find('> div');

    total.text(minTwoDigits(items.length));

    slider.slick({
      infinite: true,
      swipe: false,
      arrows: false,
      dots: true,
      appendDots: dots
    });

    previews.slick({
      infinite: true,
      swipe: false,
      arrows: false,
      initialSlide: 1
    });

    prevArrow.on('click', function(){
      slider.slick('slickPrev');
      previews.slick('slickPrev');
    });

    nextArrow.on('click', function(){
      slider.slick('slickNext');
      previews.slick('slickNext');
    });

    slider.on('afterChange', function(event, slick, currentSlide){
      play.attr('href', items.eq(currentSlide).data('play'));
    });
  }
}());
