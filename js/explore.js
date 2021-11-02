$(window).load(function () {
    $(".se-pre-con").delay(1500).fadeOut("slow");;
    $("#overlayer").delay(1500).fadeOut("slow");;
  });
  
  
  var rellax = new Rellax('.fre');
  var rellax = new Rellax('.fre1');
  var rellax = new Rellax('.fre2');

  $('.video3').parent().click(function () {
    if($(this).children(".video3").get(0).paused)
    { 
      $(this).children(".video3").get(0).play();
      $(this).children(".playpause1").fadeOut();
      $(this).children(".lineline1").fadeOut();
      $(this).children("#ic2").fadeOut();
    }
    else
    {
    $(this).children(".video3").get(0).pause();
    $(this).children(".playpause1").fadeIn();
    $(this).children(".lineline1").fadeIn();
    $(this).children("#ic2").fadeIn();
      }
  });

  $('.Show').click(function() {
    $('.image4').show(0);
    $('.video3').show(0);
    $('.lineline1').show(0);
    $('.playpause1').show(0);
    $('.bgb4').show(0);
    $('.Show').hide(0);
    $('.Hide').show(0);
  });
  $('.Hide').click(function() {
    $('.image4').hide(0);
    $('.video3').hide(0);
    $('.lineline1').hide(0);
    $('.playpause1').hide(0);
    $('.video2').show(0);
    $('.bgb4').hide(0);
    $('.Show').show(0);
    $('.Hide').hide(0);
  });