$(document).ready(function(){
    $(".top-slider").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
    });



  var owl =  $(".product-slider").owlCarousel({
        items: 1,
        dots: true,
        // animateOut: 'fadeOut',
        animateIn:  'fadeIn',
        smartSpeed: 450,
       
    });

    jQuery(".cd-hover-gal .owl-dot").hover(function() {
      jQuery(this).trigger("click");
      }
  );
  resize_dots();
  owl.on("mouseleave", function(){
      jQuery(this).find(".product-slider .owl-dot").first().click();
  });
// resize dots from car offers carousel
function resize_dots(){
  var dots=jQuery(".product-slider .owl-dots");
  dots.each(function(){
    jQuery(this).find(".product-slider .owl-dot").css("width",100/$(this).find(".product-slider .owl-dot").length+"%");
  });
}


    $('.tabs-stage .tabs-item').hide();
    $('.tabs-stage .tabs-item:first').show();
    $('.tabs-nav li:first').addClass('tab-active');
    $('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .tabs-item').hide();
    $($(this).attr('href')).show();
    });

    $('.sale svg').on('click', function(event){
        $(".sale").hide()
    })
  

    $(".burger").click(function(){
        $('.overlay').animate({width:'toggle'},250,function (){
        if($('.overlay').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })
    
    $(".close").click(function(){
        $('.overlay').animate({width:'toggle'},250,function (){
        if($('.overlay').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })

    $('.overlay').on('click', function(e) {
        if (e.target !== this)
            return;

        $('.overlay').animate({width:'toggle'},250,function (){
      
        })
        
        });


    $(".catalog-btn").click(function(){
        $('.overlay-catalog').animate({width:'toggle'},250,function (){
        if($('.overlay-catalog').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })

    $(".close-catalog").click(function(){
        $('.overlay-catalog').animate({width:'toggle'},250,function (){
        if($('.overlay-catalog').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })
    $('.overlay-catalog').on('click', function(e) {
        if (e.target !== this)
            return;

        $('.overlay-catalog').animate({width:'toggle'},250,function (){
      
        })
        
        });
    $(function() {
        $('.m-li').on('click', function(e) {
            e.preventDefault();
           $(this).siblings().removeClass('sh').end().toggleClass('sh');
           $(this).find(".menu-second a").click(function(){
                var href = $(this).attr('href');
                window.location.href = href; 
            });
        });
    });

    $(function() {
        $('.t-li').on('click', function(e) {
            e.preventDefault();
           $(this).siblings().removeClass('mh').end().toggleClass('mh');
           $(this).find(".menu-li-items a").click(function(){
                var href = $(this).attr('href');
                window.location.href = href; 
            });
        });
    });

    $("#dd span").change(function(e) {
      });
      $("#de span").change(function(e) {
      });
      (function ( $ ) {
        $.fn.dropdown = function()
          {
            var el = $(this);
            el.addClass("dropdown");
            var holder = $("span.holder",el);
            var opts_con = $("ul",el);                                 
            var opts   = $("ul li",el);
            var val    = "";
          opts_con.prepend("<span class='arrow_up'></span>");
      
          el.on("click",function()
            {
              opts_con.toggleClass("active")
      
            });
      
          opts.on("click",function()
            {
              holder.text($(this).text());
              holder.change();
            }); 
          }
                
      }( jQuery ));	
      $("#dd").dropdown();
      

      
    $("#ddd span").change(function(e) {
    });
    $("#de span").change(function(e) {
    });
    (function ( $ ) {
      $.fn.dropdown = function()
        {
          var el = $(this);
          el.addClass("dropdown");
          var holder = $("span.holder",el);
          var opts_con = $("ul",el);                                 
          var opts   = $("ul li",el);
          var val    = "";
        opts_con.prepend("<span class='arrow_up'></span>");
    
        el.on("click",function()
          {
            opts_con.toggleClass("active")
    
          });
    
        opts.on("click",function()
          {
            holder.text($(this).text());
            holder.change();
          }); 
        }
              
    }( jQuery ));	
    $("#ddd").dropdown();

      $(".size-show").click(function(){
        $(".size-modal").toggle();
    });



    $(".price-show").click(function(){
      $(".price-modal").toggle();
  });

  $(".mobile-search svg").click(function(){
    $(".mobile-search_inp").toggle();
});
$(window).click(function() {
  $(".mobile-search_inp").hide();
 
});

$('.mobile-search svg').click(function(event){
  event.stopPropagation();
});

$('.mobile-search input').click(function(event){
  event.stopPropagation();
});

//   document.addEventListener('gesturestart', function (e) {
//         e.preventDefault();
//     });


    $(window).click(function() {
        $(".size-modal").hide();
       
      });
      
      $('.size-show').click(function(event){
        event.stopPropagation();
      });
     
      
      $('.size-modal').click(function(event){
        event.stopPropagation();
      });



      $(window).click(function() {
        $(".price-modal").hide();
       
      });
      
      $('.price-show').click(function(event){
        event.stopPropagation();
      });
     
      
      $('.price-modal').click(function(event){
        event.stopPropagation();
      });

      $(".single_top-content-left-images img").click(function(e){
        var scrI = $(this).attr("src");
        
        $("#big").attr("src", scrI);
        // $(".big-fancy").attr("href", scrI);
    });

    $('.single_top-content-left-img_modal_close').click(function(event){
        $(".single_top-content-left-img_modal").hide();
      });

      $(document).ready(function() {
        $("a.fancybox").fancybox()
      });

      $('.addCart').click(function(event){
         event.preventDefault();
            $(".alert").show()
            $(".black_alert").show()
      });
      $('#close-alert').click(function(event){
        $(".alert").hide()
        $(".black_alert").hide()
  });



  jQuery(".check-left input").on("invalid", function(event) {
    $(this).parent().find(".error").show()
    $(this).css({"border-color": "#e52677"});

});

  jQuery(".check-left input").on("change", function(event) {
    $(this).parent().find(".error").hide()
    $(this).css({"border-color": "#288aca"});

});

$(function() {
  $('.delivery-btn button').on('click', function(e) {
     $(this).siblings().removeClass('active').end().addClass('active');
    
  });
});

});    

