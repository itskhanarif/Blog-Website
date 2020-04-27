$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapase');

    //Toggling the nav manu
    $toggleCollapse.click(function(){
      $nav.toggleClass('collapse');
    })
    //owl carousel
    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      dots : false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
});
