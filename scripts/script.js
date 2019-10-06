jQuery(document).ready(function($) {
 $('.owl-carousel').owlCarousel({
 	margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1050:{
            items:3
        }
    }
 });

$('.js-block_scroll-btn').on('click', function(){
	var movePos = $(window).scrollTop() + $(window).height();
	$('html, body').animate({
      scrollTop: movePos}, 600);
  });

var $ul = $('.js-block_ul');
$ul.on('click', 'li', function(){
	var $parent = $ul.parent();
	var $li = $ul.children('li');
	var that = $(this);
	var attrThat = that.attr('data-block');
	var $blocks = $parent.children('.block_carousel');

	$li.removeClass('js-block_ul_active');
	$blocks.removeClass('js-block_carousel-active');

	that.addClass('js-block_ul_active');
	$blocks.each(function(){
		var that = $(this);
		var attrBlock = that.attr('data-block');
		if(attrBlock == attrThat){
			that.addClass('js-block_carousel-active');
			return false;
		}
	});
})

var fileBox = $('.js-form_file-box');
var inputFile = fileBox.children('input[type="file"]');
$('.js-form_file-box_btn').on('click', function(){
	inputFile.click();
})
inputFile.on('change', function(){
	$(this).addClass('js-form_file-box_input-ok');
})

});