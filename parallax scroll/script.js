(function() {
    $(window).scroll(function(){
       var scrolled_value = $(this).scrollTop(); 
       $('.logo').css({
          'transform'  : 'translate(0px , '+ scrolled_value/2 +'%)'
       });
    });
})();