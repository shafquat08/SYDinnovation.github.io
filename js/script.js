  /* Side slide menu */
    function openNav() {
    document.getElementById("sideNavbar").style.width = "100%";
}

function closeNav() {
    document.getElementById("sideNavbar").style.width = "0";
}

/* tab slider */
// $(document).ready( function() {
//     $('#myCarousel').carousel({
      
//         interval:   2000
//   });
  
//   var clickEvent = false;
//   $('#myCarousel').on('click', '.nav a', function() {
//       clickEvent = true;
//       $('.nav li').removeClass('active');
//       $(this).parent().addClass('active');    
//   }).on('slid.bs.carousel', function(e) {
//     if(!clickEvent) {
//       var count = $('.nav').children().length -1;
//       var current = $('.nav li.active');
//       current.removeClass('active').next().addClass('active');
//       var id = parseInt(current.data('slide-to'));
//       if(count == id) {
//         $('.nav li').first().addClass('active');  
//       }
//     }
//     clickEvent = false;
//   });
// });


// Equal height 
/* Thanks to CSS Tricks for pointing out this bit of jQuery
https://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   $el = jQuery(this);
   jQuery($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

jQuery(window).load(function() {
  equalheight('.equalHeight');
});


jQuery(window).resize(function(){
  equalheight('.equalHeight');
});


// Our client say slider.
//$(document).ready(function() {
  //Set the carousel options
//   $('#quote-carousel').carousel({
//     pause: true,
//     interval: 3000,
//   });
// });


/* team carousel js */

/*Slider function [It is recommended to place a function in a separate JS file, such as "functions.js"]*/
function myCoolSlider() {
        $('#featured-content').slick({
            dots: true,
            infinite: true,
            draggable: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3200,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    /*End of Slider function*/

var prevSlideInterval = null,
    nextSlideInterval = null;


// function hoverEffect() {
//     $('.team-slider-img').mouseover(function(){
//         $('.team-slider-img').addClass('slideOutUp');
//     });
//     $('.team-slider-img').mouseout(function(){
//         $('.team-slider-img').removeClass('slideOutUp');
//     });

// }

$(document).ready(function() {

  
/*Calling the function [It is recommended to call a function in a separate JS file, such as "scripts.js"]*/
    myCoolSlider();
/*.................End of call*/

//hoverEffect();

});


new WOW().init();
