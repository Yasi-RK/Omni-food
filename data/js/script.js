
$(document).ready(function() {

    $('.js--section-futures').waypoint(function(direction) {

        if (direction =="down") { 
        $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
         },{
            offset: '150px;'
    });

    $('.js--scroll-to-plan').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top,} ,1000);

    });

    $('.js--go-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--start').offset().top,}, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-futures').offset().top,} ,1000);

    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');

        }, {offset:'50%'
    }
    );

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');

        }, {offset:'50%'
    }
    );

    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');

        }, {offset:'50%'
    }
    );

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');

        }, {offset:'50%'
    }
    );

    
  


});






    /* 
    var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})  */

/*  */



