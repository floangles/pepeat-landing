$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 750) {
      $(".navbar").css({
        "background": "rgba(2,2,2,0.85)",
        "box-shadow": "0 0 2px black"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });
  if ($(this).scrollTop() > 750) {
      $(".navbar").css({
        "background": "rgba(2,2,2,0.8)",
        "box-shadow": "0 0 2px black"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
});



