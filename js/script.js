$(document).ready(function(){
    //my skills carroussel
    $('.skills').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    //navbar scroll change color
    var scroll_start = 0;
    var startchange = $('.div-text');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navbar-fixed-top').css('background-color', '#343A40');
        }else{
            $('.navbar-fixed-top').css('background-color', 'transparent');
       }
   });
});