$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapase');

    $toggleCollapse.click(function(){
      $nav.toggleClass('collapse');
    })

});
