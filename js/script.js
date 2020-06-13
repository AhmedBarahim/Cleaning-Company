$(document).ready(function() {

    // Social Media Collapse
	$('#sm-close').click(function(){
		$('.s-media').addClass('sm-collapse');
        $('#sm-open').delay(300).css('left', '0');
	});

    $('#sm-open').click(function(){
        $('#sm-open').css('left', '-100px');
        $('.s-media').removeClass('sm-collapse');

    });
    $("#MyCarousel").mouseover(function(){
      $(MyCarousel).carousel("cycle");
      });
			// Code By Webdevtrick (https://webdevtrick.com)
			$(document).ready(function(){
			  var zindex = 10;

			  $("div.card").click(function(e){
			    e.preventDefault();

			    var isShowing = false;

			    if ($(this).hasClass("d-card-show")) {
			      isShowing = true
			    }

			    if ($("div.dashboard-cards").hasClass("showing")) {
			      $("div.card.d-card-show")
			        .removeClass("d-card-show");

			      if (isShowing) {
			        $("div.dashboard-cards")
			          .removeClass("showing");
			      } else {
			        $(this)
			          .css({zIndex: zindex})
			          .addClass("d-card-show");

			      }

			      zindex++;

			    } else {
			      $("div.dashboard-cards")
			        .addClass("showing");
			      $(this)
			        .css({zIndex:zindex})
			        .addClass("d-card-show");

			      zindex++;
			    }

			  });
			});
    // END Click Function
});// END DOCUMENT.Ready
$(document).ready(function(){

if($('.brands_slider').length)
{
var brandsSlider = $('.brands_slider');

brandsSlider.owlCarousel(
{

autoplay:true,
autoplayTimeout:5000,
nav:false,
dots:true,
// autoWidth:true,
// responsive: true,
// items:5,
responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            // loop:true
        }
    },
margin:42,
loop:true
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});


$('.dropdown-menu a.dropdown-toggle').on('click mouseover', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });
	


  return false;
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}
