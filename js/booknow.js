$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").delay(2000).fadeOut("slow");;
	$("#overlayer").delay(2000).fadeOut("slow");;
  });
  
  $('.Show').click(function() {
    alert("conform!");
    $('#target').hide(0);
    $('#target1').hide(0);
	$('#target2').show(0);
    $('.Show').hide(0);
    $('.Hide').show(0);
    $('.Show1').show(0);
    $('.Hide1 ').hide(0);
});
$('.Hide').click(function() {
    $('#target').show(0);
	$('#target1').hide(0);
	$('#target2').hide(0);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.Show1').click(function() {
	$('#target').hide(0);
	$('#target1').show(0);
    $('#target2').hide(0);
    $('.Show1').hide(0);
    $('.Hide1').show(0);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.Hide1').click(function() {
	$('#target').show(0);
	$('#target1').hide(0);
    $('#target2').hide(0);
    $('.Show1').show(0);
    $('.Hide1 ').hide(0);
});
