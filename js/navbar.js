let isNavShow = false;

//
// determine if device is a mobile device or not
//
function isMobile() 
{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$(document).ready(function()
{

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Click behavior for navbar links
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        console.log($(window).width);
        if($(window).width() <= 980)
        {
           $(".navbar").css({"display":"none","left":"-40%"});
           $("#nav-trig").removeClass("change");
           $(".mainbody").fadeTo("normal", 1); 
           isNavShow=false;  
        }
    });
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // side scroll navbar
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    $(window).scroll(function()
    {
        if(!isMobile())
        {
            let x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
            let offset = -x+"px";
            $(".navbar").css("left", offset);
        }
    });
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Mobile nav-trig click functionality
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $("#nav-trig").click(function()
    {
        $(this).toggleClass("change");
        //var z = $(".navbar").css("display");
        if(!isNavShow) 
        {
            $(".navbar").css("display", "grid"); 
            $(".navbar").animate({left: '+=40%'});
            //$(".mainbody").fadeTo("normal", 0.5);
            $(".navbar-overlay").css("display", "block");
            isNavShow=true;
        }
        else 
        {
            $(".navbar").animate({left: '-=40%'});
            /*$(".navbar").css("display", "none");*/
            //$(".mainbody").fadeTo("normal", 1);
            $(".navbar-overlay").css("display", "none");
            isNavShow=false;
        }
        
    });
    $(".navbar-overlay").click(function(){
        $(".navbar").animate({left: '-=40%'});
        /*$(".navbar").css("display", "none");*/
        //$(".mainbody").fadeTo("normal", 1);
        $(".navbar-overlay").css("display", "none");
        isNavShow=false;
    });
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

});