// event pada saat link di klik

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250,'easeInOutExpo');

 e.preventDefault();
});

//paralax
//about

$(window).on('load', function() {
    $('.pkiri').addClass('pMuncul');
    $('.pkanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

   $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
   });

   $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
   });

   $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
   });

    // potofolio

   if( wScroll > $('.portofolio').offset().top - 250) {
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    
    // $('.portofolio .thumbnail').addClass('muncul');
   }


});