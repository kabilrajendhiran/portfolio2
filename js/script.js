$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    });

});

$(document).ready(function(){
    var typed=new Typed(".typed",{
        strings:['Software Engineer','Web Developer','Student'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 500,
       startDelay: 1000,
       loop:true,
       showCursor:false
    });

   

var owl= $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    }); 
    

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY<0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    var skillsTopOffset=$('.skillsSection').offset().top;
    
    var statsTopOffset=$('.statsSection').offset().top;

   
    var counterFinished=false;
    

   
    

    $(window).scroll(function(){
      
       var stickynavbar=$('.navbarsection').offset().top;


       if(window.pageYOffset > skillsTopOffset -$(window).height() +200)
       {
            
            $('.chart').easyPieChart({
                //your options goes here
                easing:'easeInOut',
                barColor:'#1B9CFC',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
       }


       if(!counterFinished && window.pageYOffset > statsTopOffset -$(window).height() +200)
       {
            counterFinished=true;
            $('.counter').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

       }

       

    if($(window).height()<641)
    {
        if(window.pageYOffset > stickynavbar)
        {
            $(".custom-navbar").addClass("fixed-top");
        }
        else
        {
            $(".custom-navbar").removeClass("fixed-top")
        }
       
    }
    else
    {
        if(window.pageYOffset > stickynavbar -$(window).height()+1043)
       {    
            $(".custom-navbar").addClass("fixed-top");
       }
       else
       {
            $(".custom-navbar").removeClass("fixed-top");
       }
    }

       




    });


/*
    $('.limages').lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        
    });
*/

    


               
});
