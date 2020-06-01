$(document).ready(function() {


    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 350));

    });

    //SMOOTH SCROLL

    $('.menu li a[href^="#"]').on('click', function(e){
            e.preventDefault();

            var target = $(this.hash);

            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top -80
                }, 1000);
            }

        });



$("#filters :checkbox").click(function(){
  var values = [];
  $.each($("input[type='checkbox']:checked"), function(){
    values.push($(this).val());
  });

  $('li').each(function() {

  	var classes = [];
    classes = this.className.split(' ');
    if(classes.includes("blocker")){
      return;
    }
    var checker = values.every(val => classes.includes(val));

    if(checker){
    	if(this.style.display == 'none'){
    		$(this).fadeIn();
        	$(this).animate({left: '0'});
    	}
    }
    else{
    	if(this.style.display != 'none'){
    		$(this).animate({left: '285px'});
        	$(this).fadeOut();
    	}
    }
  });
});



$('.menu li a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var target = $(this.hash);

    if(target.length){
        $('html, body').stop().animate({
          scrollTop: target.offset().top -20}
          ,1000);

        }
});



});
